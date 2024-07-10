#
# Helper for building the wobsite.
#
# vim: et:ts=2:sw=2:
#
{
  #
  # The sources we depend on.
  #
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.05";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }: 
    flake-utils.lib.eachDefaultSystem (system: 
    let
      pkgs = import nixpkgs { inherit system; };
    in
    {
        # For local development...
        devShell = pkgs.mkShell { buildInputs = [ pkgs.hugo pkgs.sass ]; };

        # ... and remote deployment.
        packages = {
          site-content = pkgs.callPackage ./nix/site-content.nix {};
        };

    });
}
