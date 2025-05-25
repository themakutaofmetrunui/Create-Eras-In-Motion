ItemEvents.tooltip(event => {
    event.addAdvanced('createaddition:modular_accumulator', (item, advanced, text) => {
        if (!event.shift) {
          text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').gray(), Text.of('] for Summary').darkGray()])
        } else {
          text.add(1, [Text.of('Requires ').gold(), Text.of('Large Connectors').yellow(), Text.of(' to be charged').gold()])
          text.add(2, Text.of(' '))
          text.add(3, [Text.of('Directly connected a ' ).gold(), Text.of('Converter').yellow(), Text.of(', it will lose energy').gold()])
        }
    })
    event.addAdvanced( ['tfmg:rotor', 'tfmg:generator', 'tfmg:galvanic_cell'], (item, advanced, text) => {
        text.add(1, [Text.of('Generates ').darkRed(), Text.of('FE').red(), Text.of(' with ').darkRed(), Text.of('Voltage').red(), Text.of(". To use other mods' electrical appliances, use a ").darkRed(), Text.of('Converter').red(), Text.of('.').darkRed()])
    }) 
})