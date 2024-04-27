#
# Hugo website output.
# vim: et:ts=2:sw=2:
#
{ pkgs, ... }: pkgs.stdenv.mkDerivation {
    name = "site-content";
    src = ../.;

    nativeBuildInputs = [ pkgs.hugo ];

    buildPhase = ''
      hugo -D -d _output
    '';

    installPhase = ''
      cp -r _output $out
    '';
}
