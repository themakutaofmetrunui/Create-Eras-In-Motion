StartupEvents.registry('item', event =>{
    event.create('mini_engine').displayName('Mini Engine')
    event.create('magnetic_plate').displayName('Magnetic Plate')
    event.create('magnetic_rod').displayName('Magnetic Rod')
    event.create('magnetic_wire').displayName('Magnetic Wire')
    event.create('magnetic_spool').displayName('Magnetic Spool')
    event.create('polysilicate_nugget').displayName('Polysilicate Nugget')
    event.create('polysilicate_ingot').displayName('Polysilicate Ingot')
    event.create('polysilicate_sheet').displayName('Polysilicate Sheet')
    event.create('crushed_raw_lithium').displayName('Crushed Raw Lithium')
    event.create('crushed_raw_tungsten').displayName('Crushed Raw Tungsten')
    event.create('polysilicate_blasting_mixture').displayName('Polysilicate Blasting Mixture')
    event.create('quartz_iron_blasting_mixture').displayName('Quartz Enriched Iron Blasting Mixture')
    event.create('basic_rocket_plating').displayName('Basic Rocket Plating')
    event.create('advanced_rocket_plating').displayName('Advanced Rocket Plating')
    event.create('elite_rocket_plating').displayName('Elite Rocket Plating')
    event.create('ultimate_rocket_plating').displayName('Ultimate Rocket Plating')
    event.create('incomplete_photovoltaic_cell', 'create:sequenced_assembly').displayName('Incomplete Photovoltaic Cell')
    event.create('incomplete_basic_control_circuit', 'create:sequenced_assembly').displayName('Incomplete Basic Control Circuit')
    event.create('incomplete_advanced_control_circuit', 'create:sequenced_assembly').displayName('Incomplete Advanced Control Circuit')
    event.create('incomplete_elite_control_circuit', 'create:sequenced_assembly').displayName('Incomplete Elite Control Circuit')
    event.create('incomplete_ultimate_control_circuit', 'create:sequenced_assembly').displayName('Incomplete Ultimate Control Circuit')
    event.create('unfinished_gas_burning_generator', 'create:sequenced_assembly').displayName('Unfinished Gas-Burning Generator')
    event.create('unfinished_bio_generator', 'create:sequenced_assembly').displayName('Unfinished Bio Generator')
    event.create('unfinished_steel_engine', 'create:sequenced_assembly').displayName('Unfinished Steel Engine')
    event.create('unfinished_desh_engine', 'create:sequenced_assembly').displayName('Unfinished Desh Engine')
    event.create('unfinished_ostrum_engine', 'create:sequenced_assembly').displayName('Unfinished Ostrum Engine')
    event.create('unfinished_calorite_engine', 'create:sequenced_assembly').displayName('Unfinished Calorite Engine')
    event.create('dirty_dust_etrium').displayName('Dirty Etrium Dust')
    event.create('dust_etrium').displayName('Etrium Dust')
    event.create('shard_etrium').displayName('Etrium Shard')
    event.create('clump_etrium').displayName('Etrium Clump')
    const mat = ['calorite', 'desh', 'nickel', 'ostrum', 'tungsten', 'zinc', 'ice_shard']
    const matname = ['Calorite', 'Desh', 'Nickel', 'Ostrum', 'Tungsten', 'Zinc', 'Ice Shard']
    for (let i = 0; i < mat.length; i++) {
        event.create('dust_' + mat[i]).displayName(matname[i] + ' Dust')
    }
    matname.pop()
    mat.pop()
    mat.push('lithium')
    matname.push('Lithium')
    for (let i = 0; i < mat.length; i++) {
        event.create('dirty_dust_' + mat[i]).displayName('Dirty ' + matname[i] + ' Dust')
        event.create('clump_' + mat[i]).displayName(matname[i] + ' Clump')
        event.create('shard_' + mat[i]).displayName(matname[i] + ' Shard')
        event.create('crystal_' + mat[i]).displayName(matname[i] + ' Crystal')
    }
    event.create('thorium').displayName('Thorium')
})
StartupEvents.registry('fluid', event =>{
    event.create('slime_resin').bucketColor('#8cd782').displayName('Slime Resin').thickTexture('#55FF55')
    event.create('accelerator').bucketColor('#f4c7ff').thinTexture('#f4c7ff').displayName('Accelerator')
    event.create('molten_silicon').bucketColor('#475f66').thickTexture('#475f66').displayName('Molten Silicon')
    event.create('molten_quartz_enriched_iron').bucketColor('#8c8788').thickTexture('#8c8788').displayName('Molten Quartz Enriched Iron')
    event.create('molten_polysilicate').bucketColor('#bcced6').thickTexture('#bcced6').displayName('Molten Polysilicate')
    event.create('heat_shield_coating').bucketColor('#411603').thickTexture('#411603').displayName('Heat Shield Coating')
})
StartupEvents.registry('block', event =>{
    event.create('block_raw_lithium').displayName('Raw Lithium Block')
    event.create('block_raw_nickel').displayName('Raw Nickel Block')
})
StartupEvents.registry('mekanism:gas', event =>{
    event.create('thorium_oxide').displayName('Thorium Oxide').color('0x0086c1')
})
StartupEvents.registry('mekanism:slurry', event =>{
    const mat = ['calorite', 'desh', 'nickel', 'ostrum', 'tungsten', 'zinc', 'lithium']
    const matcolor = ['9e1f3f', 'c46746', '89836a', '775360', '4d3f5f', '929b87', 'beb1a1']
    const matname = ['Calorite', 'Desh', 'Nickel', 'Ostrum', 'Tungsten', 'Zinc', 'Lithium']
    for (let i = 0; i < mat.length; i++) {
        event.create('dirty_' + mat[i], 'dirty').displayName('Dirty ' + matname[i] + ' Slurry').color('0x' + matcolor[i])
        event.create('clean_' + mat[i], 'clean').displayName('Clean ' + matname[i] + ' Slurry').color('0x' + matcolor[i])
    }
})
StartupEvents.registry('mekanism:infuse_type', event =>{
    event.create('etrium').displayName('Etrium').color(0x42908d)
    event.create('deuterium').displayName('Deuterium').color(0xe30000)
})