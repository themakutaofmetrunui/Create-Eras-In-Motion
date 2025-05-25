var tcirc = 'create_dd:incomplete_integrated_circuit'
var tbas = 'refinedstorage:raw_basic_processor'
var timp = 'refinedstorage:raw_improved_processor'
var tadv = 'refinedstorage:raw_advanced_processor'
var tqua = 'createteleporters:incomplete_q_mechanism'
var tphoto = 'kubejs:incomplete_photovoltaic_cell'
var tbcon = 'kubejs:incomplete_basic_control_circuit'
var tacon = 'kubejs:incomplete_advanced_control_circuit'
var tecon = 'kubejs:incomplete_elite_control_circuit'
var tucon = 'kubejs:incomplete_ultimate_control_circuit'
ServerEvents.recipes(event => {
    //create dreams and desires
    event.recipes.createSequencedAssembly([ //start the recipe
        Item.of('create_dd:abstruse_mechanism') //this will be the result in JEI
    ], 'create_dd:kinetic_mechanism', [ // the input
		// the transitional item
		event.recipes.createDeploying('create_dd:incomplete_abstruse_mechanism', [ 'create_dd:incomplete_abstruse_mechanism', 'minecraft:ender_pearl'] ),
 	 	// like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
    event.recipes.createDeploying('create_dd:incomplete_abstruse_mechanism', [ 'create_dd:incomplete_abstruse_mechanism', 'minecraft:amethyst_shard'] ),
		event.recipes.createDeploying('create_dd:incomplete_abstruse_mechanism', [ 'create_dd:incomplete_abstruse_mechanism', 'minecraft:shulker_shell'] ),
    ]).transitionalItem('create_dd:incomplete_abstruse_mechanism').loops(1) // set the transitional item and the loops (amount of repetitions)

    event.recipes.createSequencedAssembly([
      Item.of('create_dd:infernal_mechanism')
    ], 'create_dd:kinetic_mechanism', [
      event.recipes.createDeploying('create_dd:incomplete_infernal_mechanism', ['create_dd:incomplete_infernal_mechanism', 'minecraft:magma_cream']),
      event.recipes.createDeploying('create_dd:incomplete_infernal_mechanism', ['create_dd:incomplete_infernal_mechanism', 'minecraft:blaze_powder']),
      event.recipes.createFilling('create_dd:incomplete_infernal_mechanism', ['create_dd:incomplete_infernal_mechanism', Fluid.lava(100)]),
    ]).transitionalItem('create_dd:incomplete_infernal_mechanism').loops(1)
    event.recipes.createSequencedAssembly([
      Item.of('create_dd:integrated_circuit')
    ], 'refinedstorage:silicon', [
      event.recipes.createDeploying(tcirc, [tcirc, 'tfmg:capacitor_']),
      event.recipes.createDeploying(tcirc, [tcirc, 'createaddition:capacitor']),
      event.recipes.createDeploying(tcirc, [tcirc, 'tfmg:resistor_']),
    ]).transitionalItem(tcirc).loops(2)
    //RF
    event.recipes.createSequencedAssembly([
      Item.of('refinedstorage:basic_processor')
    ], 'create:iron_sheet', [
      event.recipes.createDeploying(tbas, [tbas, 'refinedstorage:processor_binding']),
      event.recipes.createDeploying(tbas, [tbas, 'create_dd:integrated_circuit']),
      event.recipes.createDeploying(tbas, [tbas, '#forge:wires/high_current']),
      event.recipes.createDeploying(tbas, [tbas, 'createaddition:copper_wire']),
    ]).transitionalItem(tbas).loops(1)

    event.recipes.createSequencedAssembly([
      Item.of('refinedstorage:improved_processor')
    ], 'create:golden_sheet', [
      event.recipes.createDeploying(timp, [timp, 'refinedstorage:processor_binding']),
      event.recipes.createDeploying(timp, [timp, 'create_dd:integrated_circuit']),
      event.recipes.createDeploying(timp, [timp, '#forge:wires/high_current']),
      event.recipes.createDeploying(timp, [timp, 'createaddition:copper_wire']),
    ]).transitionalItem(timp).loops(1)

    event.recipes.createSequencedAssembly([
      Item.of('refinedstorage:advanced_processor')
    ], 'diamond', [
      event.recipes.createDeploying(tadv, [tadv, 'refinedstorage:processor_binding']),
      event.recipes.createDeploying(tadv, [tadv, 'create_dd:integrated_circuit']),
      event.recipes.createDeploying(tadv, [tadv, '#forge:wires/high_current']),
      event.recipes.createDeploying(tadv, [tadv, 'createaddition:copper_wire']),
    ]).transitionalItem(tadv).loops(1)

    event.recipes.createSequencedAssembly([
      Item.of('ad_astra:photovoltaic_etrium_cell')
    ], 'kubejs:polysilicate_sheet', [
      event.recipes.createDeploying(tphoto, [tphoto, 'mekanism:alloy_infused']),
      event.recipes.createDeploying(tphoto, [tphoto, '#forge:wires/high_current']),
      event.recipes.createPressing(tphoto, tphoto),
    ]).transitionalItem(tphoto).loops(1)
    //quantum
    event.recipes.createSequencedAssembly([
      Item.of('createteleporters:quantum_mechanism')
    ], 'create:sturdy_sheet', [
      event.recipes.createFilling(tqua, [tqua, Fluid.of('createteleporters:quantum_fluid', 100)]),
      event.recipes.createDeploying(tqua, [tqua, 'refinedstorage:advanced_processor']),
      event.recipes.createPressing(tqua, tqua),
      event.recipes.createPressing(tqua, tqua),
    ]).transitionalItem(tqua).loops(1)
    //mekanism
    event.recipes.createSequencedAssembly([
      Item.of('mekanism:basic_control_circuit')
    ], 'vintageimprovements:osmium_sheet', [
      event.recipes.createDeploying(tbcon, [tbcon, 'refinedstorage:processor_binding']),
      event.recipes.createDeploying(tbcon, [tbcon, 'create_dd:integrated_circuit']),
      event.recipes.createDeploying(tbcon, [tbcon, '#forge:wires/high_current']),
      event.recipes.createDeploying(tbcon, [tbcon, 'createaddition:copper_wire']),
    ]).transitionalItem(tbcon).loops(1)

    event.recipes.createSequencedAssembly([
      Item.of('mekanism:advanced_control_circuit')
    ], 'mekanism:alloy_infused', [
      event.recipes.createDeploying(tacon, [tacon, 'refinedstorage:processor_binding']),
      event.recipes.createDeploying(tacon, [tacon, 'create_dd:integrated_circuit']),
      event.recipes.createDeploying(tacon, [tacon, '#forge:wires/high_current']),
      event.recipes.createDeploying(tacon, [tacon, 'createaddition:copper_wire']),
    ]).transitionalItem(tacon).loops(1)

    event.recipes.createSequencedAssembly([
      Item.of('mekanism:elite_control_circuit')
    ], 'mekanism:alloy_reinforced', [
      event.recipes.createDeploying(tecon, [tecon, 'refinedstorage:processor_binding']),
      event.recipes.createDeploying(tecon, [tecon, 'create_dd:integrated_circuit']),
      event.recipes.createDeploying(tecon, [tecon, '#forge:wires/high_current']),
      event.recipes.createDeploying(tecon, [tecon, 'createaddition:copper_wire']),
    ]).transitionalItem(tecon).loops(1)

    event.recipes.createSequencedAssembly([
      Item.of('mekanism:ultimate_control_circuit')
    ], 'mekanism:alloy_atomic', [
      event.recipes.createDeploying(tucon, [tucon, 'refinedstorage:processor_binding']),
      event.recipes.createDeploying(tucon, [tucon, 'create_dd:integrated_circuit']),
      event.recipes.createDeploying(tucon, [tucon, '#forge:wires/high_current']),
      event.recipes.createDeploying(tucon, [tucon, 'createaddition:copper_wire']),
    ]).transitionalItem(tucon).loops(1)
})