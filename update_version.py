#!/usr/bin/env python3
import subprocess
from pathlib import Path
import json


def get_archive_hash(url):
    output = subprocess.check_output([
        'nix', '--extra-experimental-features', 'nix-command', 'store', 'prefetch-file', '--name', 'source', '--json', '--unpack', url
    ])

    data = json.loads(output)
    return data['hash']


def substitute_all(content: str, substitutions: dict[str, str]) -> str:
    for sub, value in substitutions.items():
        content = content.replace(sub, value)
    return content


def substitute_file(path: Path, substitutions: dict[str, str]):
    content = path.with_name(path.name + '.in').read_text()
    subbed = substitute_all(content, substitutions)
    path.write_text(subbed)


def go(version: str):
    BASE_URL = 'https://git.lix.systems'
    files = [
        Path('./content/add-to-config.md'),
        Path('./content/install.md')
    ]

    version_notrail = version.partition('-')[0]

    substitutions = {
        '@VERSION_NOTRAIL@': version_notrail,
        '@VERSION@': version,
        '@LIX_ARCHIVE_HASH@': get_archive_hash(BASE_URL + f'/lix-project/lix/archive/{version_notrail}.tar.gz'),
        '@NIXOS_MODULE_HASH@': get_archive_hash(BASE_URL + f'/lix-project/nixos-module/archive/{version}.tar.gz'),
    }

    for file in files:
        substitute_file(file, substitutions)


def main():
    import argparse
    ap = argparse.ArgumentParser(description='Update versions of Lix in the website')

    ap.add_argument('version', help='Version to make the files at')
    args = ap.parse_args()

    go(args.version)

if __name__ == '__main__':
    main()
