# MAGICwhisp.github.io

A cozy, fantasy-inspired Minecraft skins and creations website.

## Add pack images and downloads

- Put pack preview images in `assets/images/`.
- Put downloadable pack files in `assets/packs/`.
- Pack detail links use `pack.html?pack=<pack-id>`; add the pack's information and available edition files in the `packs` object in `pack.html`.
- Add a matching card in `skins.html` with the same pack ID and preview image.
- Bedrock downloads should be correctly packaged `.mcpack` skin packs; Java downloads can be `.zip` archives containing the individual `.png` skins and any helpful instructions.

The current pack pages expect these filenames in `assets/packs/`:

- `christmas-sweater-teens-bedrock.mcpack`
- `rainbow-gamers-bedrock.mcpack` and `rainbow-gamers-java.zip`
- `greyscale-teens-bedrock.mcpack` and `greyscale-teens-java.zip`
- `sakura-couples-bedrock.mcpack` and `sakura-couples-java.zip`

Upload a file with the exact expected name and its download link will work. Pack preview images should use the paths referenced in `skins.html` and `pack.html`.

This is a plain HTML, CSS, and JavaScript site, so it works with GitHub Pages without a build tool.
