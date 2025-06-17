ItemEvents.tooltip(event => {
    event.addAdvanced('createaddition:modular_accumulator', (item, advanced, text) => {
        if (!event.shift) {
          text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').gray(), Text.of('] for Summary').darkGray()])
        } else {
          text.add(1, [Text.of('Requires ').color('#c7954b'), Text.of('Large Connectors').color('#eeda78'), Text.of(' to be charged').color('#c7954b')])
          text.add(2, Text.of(' '))
          text.add(3, [Text.of('Directly connected a ' ).color('#c7954b'), Text.of('Converter').color('#eeda78'), Text.of(', it will lose energy').color('#c7954b')])
        }
    })
    event.addAdvanced( ['tfmg:rotor', 'tfmg:generator', 'tfmg:galvanic_cell'], (item, advanced, text) => {
        text.add(1, [Text.of('Generates ').darkRed(), Text.of('FE').red(), Text.of(' with ').darkRed(), Text.of('Voltage').red(), Text.of(". To use other mods' electrical appliances, use a ").darkRed(), Text.of('Converter').red(), Text.of('.').darkRed()])
    })
    event.addAdvanced(['aquaculture:worm', '#aquaculture:fishing_line', '#aquaculture:bobber', 'aquaculture:gold_hook', 'aquaculture:iron_hook', 'aquaculture:note_hook', 'aquaculture:heavy_hook', 'aquaculture:light_hook', 'aquaculture:double_hook', 'minecraft:tripwire_hook', 'aquaculture:diamond_hook', 'aquaculture:nether_star_hook'], (item, advanced, text) => {
        if (!event.shift) {
          text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').gray(), Text.of('] for Summary').darkGray()])
        } else {
          text.add(1, [Text.of('Can be applied to a Rod with a ').color('#c7954b'), Text.of('Tackle Box').color('#eeda78')])
        }
    })
    event.addAdvanced('aquaculture:tackle_box', (item, advanced, text) => {
        if (!event.shift) {
          text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').gray(), Text.of('] for Summary').darkGray()])
        } else {
          text.add(1, [Text.of('Used for storage and for modifying Rods').color('#c7954b')])
        }
    })
})