# Documentation

## Table of Contents

- [Layout](#layout)
- [Library](#library)
- [Layers](#layers)
- [Inspector](#inspector)
- [Shapes](#shapes)
- [Full Screen Mode](#full-screen-mode)
- [Display Controls](#display-controls)
- [Saving & Loading Projects](#saving--loading-projects)
- [External Control (OSC)](#external-control-osc)
- [Troubleshooting](#troubleshooting)

## Layout

MapMap consists of several different windows, icons, and menu options. The main windows are the Library, Layers, Input Editor and Output Editor.

![layout](/images/layout.png)

## Library

The Library contains the collection of sources that can be used in MapMap. The supported sources are:

- Media files such as:
  - Video (see preferred video formats below)
  - Still images (PNG, JPEG, etc)
  - Animated GIFs
- Color paints/masks
- Webcams (currently on Linux version only)
- ...and more to come in future versions

### Media Sources

Importing new media can be done in multiple ways:

- Clicking on File > Import media file...
- Hitting CTRL+I
- Clicking the icon in the toolbar
- Drag and drop media directly into the library window

**Preferred Video Formats:**

- Containers: .mov, .avi, .mp4, .ogg, .ogv
- Video codec formats: Motion-JPEG / Photo-JPEG, MPEG4, Apple Pro Res 422

![import media file](/images/import_media_file.png)

### Color Sources

Adding color paints to the library can be done by choosing File > Add color paint or by clicking on the icon in the toolbar.

![add color paint](/images/add_color_paint.png)

Once clicked, the following menu will appear. Once a color has been selected, click "Ok" to add the color to the library.

![color selection](/images/color_selection.png)

Media sources can be deleted by selecting them in the Library list, and then choosing the Edit > Delete menu item or by control-clicking on a media source and choosing "delete source". Since all the layers that use that source will also be deleted, a dialog will ask you for confirmation.

![delete source](/images/delete_source.png)

## Layers

To the right of the library tab is the layers tab. Layers are media sources that are displayed in the output editor. Layers are created when a source from the library is selected and turned into a quad, triangle, or ellipse. This tab allows users to show/hide, lock, duplicate, and delete layers.

![shape icons](/images/shape_icons.png)

Layers can be deleted by selecting them in the layer list, and then choosing the "Edit > Delete" menu item.

![delete layer](/images/delete_layer.png)

Layers can be rearranged by dragging them on top of or below each other. Doing this also controls the layer arrangement in the output editor. Layers add vertices to the source which allows the source to be edited in a variety of ways.

Next to each layer name, there are five icons:

1. **Hide Icon:** Hides or shows the layer.
2. **Isolate Icon:** Isolates the layer selected.
3. **Lock Icon:** Locks or unlocks the layer so it can't be modified.
4. **Duplicate Layer Icon:** Duplicates a layer with all its settings.
5. **Delete Icon:** Deletes the selected layer.

![layer options](/images/layer_options.png)

## Inspector

Below the Library and Layers tab is the Inspector menu. This menu changes according to what is selected in the Library or Layers tab. Through the Inspector menu, users can modify the selected source in a variety of ways.

### Layer Inspector Options

1. Layer opacity can be changed on a 0 to 100% scale.
2. Video sources can be changed to any source in the library via the source drop-down menu.
3. For Mesh Layers, there is an additional option titled "Subdivisions". This option allows the user to add additional subdivisions to the original square shape. These shapes can then be modified to create complex mappings onto a variety of screen shapes/geometries.
4. X and Y vertices for each point of the input shape can be modified.
5. X and Y vertices for each point of the output shape can be modified.

![inspector window options](/images/inspector_window_options.png)

### Library Inspector Options

1. Source opacity can be changed on a 0 to 100% scale.
2. Source location can be modified by clicking on the "..." button so that a source can be swapped for another or relocated on the user's hard drive.
3. Source speed can be changed on a 0 to 100% scale.
4. Source audio volume can be changed on a 0 to 100% scale.

![inspector window](/images/inspector_window.png)

## Shapes

Currently supported shapes are: Quads/Mesh, Triangle and Ellipse. When Meshes have a dimension of two by two (2x2) vertices, they are called Quads. When they have more than 2x2 vertices, they are called a Mesh. A Mesh is a grid of vertices that allow more flexible mapping for complex output shapes.

To create a new shape, choose a source in the library and click on the Quad/Mesh, Triangle, or Ellipse icon. A new shape will immediately be displayed in the Output Editor, where the size and shape of it can be manipulated by clicking and dragging its vertices. You can also click on a vertex and use the arrow keys to make micro adjustments to its position. You can also use the number boxes in the inspector window to move the vertices manually. To turn a Quad into a Mesh, change its dimension by adjusting its width and height number boxes.

![vertex editing](/images/vertex_editing.png)

### Transform Tools

Shapes can also be transformed via a set of transform controls. Click on a vertex and then use the following keyboard shortcuts to activate the controls:

**M = Move**

![move tool](/images/move_tool.png)

**R = Rotate**

![rotate tool](/images/rotate_tool.png)

**S = Scale**

![scale tool](/images/scale_tool.png)

## Full Screen Mode

Before projection mapping onto a surface, check the system preferences on your machine to make sure your computer is not set on mirroring, but instead is set so that your projector is an external/additional monitor. Then use the Toggle Full Screen icon at the top of the MapMap menu to send the output editor content to your projector or external monitor.

![fullscreen from menu](/images/fullscreen_from_menu.png)

**Special note for Apple users:** In your System Preferences > Mission Control, make sure that "Displays have separate Spaces" is checked or you will have control issues when you go to full screen.

![mission control](/images/mac_mission_control.png)

## Display Controls

Display Controls give the user the ability to select and move vertices both in the input and output editor menus. To hide these controls, click on the top menu "View" and then click on "Display controls". Click on it again to re-enable Display Controls.

![toggle display controls](/images/toggle_display_controls.png)

## Saving & Loading Projects

### Save the Project to a File

To save the current project, choose "File > Save as..." and then choose a file name. The file extension is ".mmp", but the file format is simply XML.

![file save as](/images/save_as.png)

### Load a Project from a File

To load a project from a file, choose "File > Open...".

![file open document](/images/open_document.png)

## External Control (OSC)

**IMPORTANT:** This feature is currently not supported on macOS.

MapMap supports the [OpenSoundControl](http://opensoundcontrol.org/introduction-osc) communication protocol. Currently supported actions allow full control of existing sources and layers, such as changing a source file, adjusting opacity and visibility, changing volume, etc.

The default OSC port can be changed from the Preferences menu.

MapMap provides a flexible way to control groups of sources and layers using [regular expressions](https://en.wikipedia.org/wiki/Regular_expression). For example, the following OSC message will change the opacity of all sources whose name starts with "movie-" to 50%:

```
/mapmap/paint/opacity ,sf "movie-*" 0.5
```

[Read the MapMap OSC reference](https://github.com/mapmapteam/mapmap/wiki/OSC)

## Troubleshooting

### macOS

To display more information about errors that might occur, launch MapMap from the command line. To do so, open the Terminal application (located in /Applications/Utilities from Finder), then type:

```
/Applications/mapmap.app/Contents/MacOS/MapMap
```

Hit the Return key to launch.
