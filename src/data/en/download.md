# Download and Install

MapMap 1.0.0-beta.1 was released on November 23, 2026. It is the first pre-release of MapMap 1.0: try it, and [report the problems you find](https://github.com/mapmapteam/mapmap/issues/new) before the final version.

<p><a class="not-prose inline-block rounded bg-gray-900 px-6 py-3 font-semibold text-white no-underline hover:bg-gray-700" href="https://github.com/mapmapteam/mapmap/releases/download/1.0.0-beta.1/MapMap-1.0.0-beta.1-macos-universal.dmg">Download for macOS</a></p>

[Read the release notes](https://github.com/mapmapteam/mapmap/releases/tag/1.0.0-beta.1)

## Available Platforms

- **macOS 13 or later** (Intel and Apple silicon): [disk image](https://github.com/mapmapteam/mapmap/releases/download/1.0.0-beta.1/MapMap-1.0.0-beta.1-macos-universal.dmg), 51 MB.
- **Windows and Linux:** there is no installer yet. Windows and Linux packages are planned for beta 2. For now, you can [build MapMap from its source code](https://github.com/mapmapteam/mapmap/releases/tag/1.0.0-beta.1), provided as a zip and a tar.gz file, by following the [build instructions](https://github.com/mapmapteam/mapmap/blob/1.0.0-beta.1/INSTALL.md).

## Source Code

- [Source code of MapMap 1.0.0-beta.1](https://github.com/mapmapteam/mapmap/releases/download/1.0.0-beta.1/mapmap-1.0.0-beta.1.tar.gz)
- [Source code on GitHub](https://github.com/mapmapteam/mapmap)

## Projects Made with an Older Version

MapMap 1.0 cannot open the projects of MapMap 0.4 to 0.6 directly. Convert them first with the Python script [convert-xml-project.py](https://github.com/mapmapteam/mapmap/blob/1.0.0-beta.1/scripts/convert-xml-project.py), giving the size of the screen or projector that the project was made for:

```
python3 scripts/convert-xml-project.py show.mmp --output-size 1920x1080
```

The original file is not changed. Projects of MapMap 0.3 and earlier cannot be converted.

## Launching the Application

**macOS:** Open the disk image and drag MapMap to the Applications folder. Then double-click its icon in the Finder.
