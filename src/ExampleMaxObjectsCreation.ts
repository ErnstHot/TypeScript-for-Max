function createMidiChannelFilterPatch() {

    // Uses 100,100,400,400 as default window coordinates.
    // Note that Typescript understands the Patcher type because of
    // our type definitions and can help autocomplete methods etc.
    var parentPatcher = new Patcher();

    // Create a patcher with a custom name
    var timestamp = new Date().getTime();
    var subpatcherName = "midi_channel_filter_" + timestamp;
    var subpatcher = parentPatcher.newdefault(0, 0, "p", subpatcherName);
    var subpatcherObj = subpatcher.subpatcher(0);

    // Create new max objects in the patcher
    var midiin = subpatcherObj.newdefault(100, 20, "midiin");
    var midiparse = subpatcherObj.newdefault(100, 60, "midiparse");
    var gate = subpatcherObj.newdefault(20, 150, "gate");
    var eqq = subpatcherObj.newdefault(170, 100, "==", 2);
    var pack = subpatcherObj.newdefault(100, 185, "pack", "1", "1", "1", "1", "1", "1");
    var midiformat = subpatcherObj.newdefault(100, 220, "midiformat");
    var midiout = subpatcherObj.newdefault(100, 250, "midiout");
    var comment = subpatcherObj.newdefault(20, 280, "comment");
    // Send the "set" message to the comment box with the comment contents
    comment.message("set", "MIDI Channel 2 Filter - Create with Javascript")

    // Hook everything up
    subpatcherObj.hiddenconnect(midiin, 0, midiparse, 0);
    subpatcherObj.hiddenconnect(midiparse, 0, gate, 1);
    subpatcherObj.hiddenconnect(midiparse, 1, pack, 1);
    subpatcherObj.hiddenconnect(midiparse, 2, pack, 2);
    subpatcherObj.hiddenconnect(midiparse, 3, pack, 3);
    subpatcherObj.hiddenconnect(midiparse, 4, pack, 4);
    subpatcherObj.hiddenconnect(midiparse, 5, pack, 5);
    subpatcherObj.hiddenconnect(midiparse, 6, eqq, 0);
    subpatcherObj.hiddenconnect(eqq, 0, gate, 0);
    subpatcherObj.hiddenconnect(gate, 0, pack, 0);
    subpatcherObj.hiddenconnect(pack, 0, midiformat, 0);
    subpatcherObj.hiddenconnect(midiformat, 0, midiout, 0);
}

function bang() {
    createMidiChannelFilterPatch();
}
