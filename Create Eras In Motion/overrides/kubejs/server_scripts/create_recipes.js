ServerEvents.recipes(event => {
  function freeze(input, output) {
    event.custom({
  "type": "create_dd:freezing",
  "ingredients": [
    {
      "item": input
    }
  ],
  "results": [
    {
      "item": output
    }
  ]
  })
  }
  function freezeextra(input, output, extraput, chance) {
    event.custom({
  "type": "create_dd:freezing",
  "ingredients": [
    {
      "item": input
    }
  ],
  "results": [
    {
      "item": output
    },
    {
      "chance": chance,
      "item": extraput
    }
  ]
  })}
  event.recipes.create.crushing('mekanism:dust_iron', 'iron_ingot')
  //moreburners
  event.recipes.create.deploying('moreburners:nickel_coil', ['moreburners:copper_coil', 'tfmg:nickel_ingot'])
  event.recipes.create.pressing('moreburners:copper_coil', 'vintageimprovements:copper_spring')
  //create dreams and desires
  event.recipes.create.mixing(Fluid.of('kubejs:accelerator', 250), ['2x warped_fungus', '2x crimson_fungus']).heated()
  event.recipes.create.mixing(['create_dd:rubber', Fluid.of('kubejs:accelerator', 100)], [Fluid.of('kubejs:accelerator', 100), Fluid.of('tfmg:liquid_plastic', 250), 'tfmg:sulfur_dust']).heated()
  //create love and war
  event.custom({
            "type": "tfmg:casting",
            "ingredients": [
              {
                "fluid": "kubejs:slime_resin",
                "amount": 1
              }
            ],
            "processingTime": 200,
            "results": [
              {
                "count": 1,
                "item": "createloveandwar:slime_resin"
              }
            ,
              {
                "count": 1,
                "item": "createloveandwar:slime_resin_block"
              }
          
            ]
  })
  event.custom({
        "type": "tfmg:casting",
        "ingredients": [
          {
            "fluid": "createloveandwar:duraplas",
            "amount": 1
          },
          {
            "count": 1,
            "item": "create:powdered_obsidian"
          }
        ],
        "processingTime": 200,
        "results": [
          {
            "count": 1,
            "item": "createloveandwar:duraplas_ingot"
          }
        ,
          {
            "count": 1,
            "item": "createloveandwar:block_of_duraplas"
          }
      
        ]
  })
  event.recipes.create.mixing(Fluid.of('kubejs:slime_resin', 250), ['sugar', 'slime_ball']).heated()
  event.recipes.create.mixing(Fluid.of('createloveandwar:duraplas', 250), [Fluid.of('tfmg:liquid_plastic', 250), 'create:powdered_obsidian'])
  event.recipes.create.compacting('createloveandwar:fuel_pellet', Fluid.of('tfmg:diesel'))
  event.recipes.create.filling('createloveandwar:propellant', [Fluid.of('createaddition:seed_oil', 250), 'gunpowder'])
  //create additions
  function biofuel(number, bio) {
    event.recipes.create.mixing((number + 'x mekanism:bio_fuel'), [bio, Fluid.of('createaddition:seed_oil', 100)]).heated()
  }
  biofuel('2', '#minecraft:leaves')
  biofuel('5', '#minecraft:flowers')
  biofuel('4', '#createaddition:plants')
  biofuel('5', '#forge:crops')
  biofuel('2', '#minecraft:saplings')
  biofuel('2', 'honeycomb')
  biofuel('4', '#createaddition:plant_foods')
  biofuel('2', '8x stick')
  event.recipes.create.milling('2x mekanism:bio_fuel', '#forge:seeds')
  //create tfmg
  event.recipes.create.mixing(['createloveandwar:catalyst', Fluid.of('tfmg:ethylene', 100)], ['createloveandwar:catalyst', Fluid.of('tfmg:kerosene', 100)]).heated()
  event.recipes.create.mixing([Fluid.of('tfmg:liquid_plastic', 500), 'createloveandwar:catalyst'], ['createloveandwar:catalyst', Fluid.of('tfmg:ethylene', 500)])
  event.recipes.create.mixing([Fluid.of('tfmg:liquid_plastic', 500), 'createloveandwar:catalyst'], ['createloveandwar:catalyst', Fluid.of('tfmg:propylene', 500)])
  event.recipes.create.mixing(Fluid.of('tfmg:crude_oil', 100), ['createloveandwar:tar_clump', Fluid.water(100)]).heated()
  event.recipes.create.crushing('vintageimprovements:copper_sulfate', 'tfmg:copper_sulfate')
  for (let i = 0; i < gas.length; i++) {
    event.recipes.vintageimprovements.vacuumizing('tfmg:' + gas[i] + '_bucket', [Fluid.of('tfmg:' + gas[i]), 'bucket'])
  }
  event.recipes.vintageimprovements.pressurizing('tfmg:air_bucket', 'bucket')
  event.recipes.vintageimprovements.pressurizing([Fluid.of('tfmg:neon', 10), 'charcoal'], 'charcoal').processingTime(10000).secondaryFluidOutput(0)
  event.recipes.vintageimprovements.pressurizing('tfmg:copper_sulfate', ['copper_ingot', Fluid.of('tfmg:sulfuric_acid', 200), Fluid.water(200)])
  event.recipes.vintageimprovementsHammering(Item.of('tfmg:heavy_plate',), 'tfmg:steel_ingot', 3)
  event.custom({
      "type":"createaddition:rolling",
      "input": {
        "item": "tfmg:steel_ingot"
      },
      "result": {
        "item": "tfmg:rebar",
        "count": 2
      }
  })
  event.custom({
  "type": "tfmg:coking",
  "ingredients": [
    {
      "count": 1,
      "item": "tfmg:bitumen"
    }
  ],
  "processingTime": 1000,
  "results": [
    {
      "count": 1,
      "item": "tfmg:coal_coke"
    }
  ,
    {
      "fluid": "tfmg:creosote",
      "amount": 1
    }

  ]
})
  //vintage improvements
  event.recipes.vintageimprovements.pressurizing([Fluid.of('mekanism:sulfur_trioxide', 250), 'iron_nugget'], [Fluid.of('mekanism:sulfur_dioxide'), 'iron_nugget']).secondaryFluidOutput(0).superheated().processingTime(400)
  event.recipes.vintageimprovements.pressurizing([Fluid.of('mekanism:sulfur_trioxide', 250), 'vintageimprovements:vanadium_nugget'], [Fluid.of('mekanism:sulfur_dioxide'), 'vintageimprovements:vanadium_nugget']).secondaryFluidOutput(0).heated().processingTime(400)
  event.recipes.vintageimprovements.pressurizing(Fluid.of('mekanism:sulfur_dioxide', 1000), 'tfmg:sulfur_dust').secondaryFluidOutput(0).processingTime(600)
  event.recipes.vintageimprovements.pressurizing(Fluid.of('tfmg:sulfuric_acid', 1000), [Fluid.of('water', 1000), Fluid.of('mekanism:sulfur_trioxide', 1000)]).processingTime(600).secondaryFluidInput(0)
  //RF
  event.recipes.create.mixing('kubejs:polysilicate_blasting_mixture', [Fluid.of('kubejs:molten_silicon', 112), 'tfmg:limesand']).heated()
  event.recipes.create.mixing('2x kubejs:quartz_iron_blasting_mixture', ['3x mekanism:dust_iron', 'mekanism:dust_quartz'])
  event.recipes.create.cutting('3x kubejs:polysilicate_sheet', 'kubejs:polysilicate_ingot')
  event.custom({
    "type": "tfmg:casting",
    "ingredients": [
      {
        "fluid": "kubejs:molten_silicon",
        "amount": 1
      },
    ],
    "processingTime": 200,
    "results": [
      {
        "count": 1,
        "item": "refinedstorage:silicon"
      }
    ]
  })
  event.custom({
    "type": "tfmg:casting",
    "ingredients": [
      {
        "fluid": "kubejs:molten_polysilicate",
        "amount": 1
      },
    ],
    "processingTime": 200,
    "results": [
      {
        "count": 1,
        "item": "kubejs:polysilicate_ingot"
      }
    ]
  })
  event.custom({
    "type": "tfmg:casting",
    "ingredients": [
      {
        "fluid": "kubejs:molten_quartz_enriched_iron",
        "amount": 1
      },
    ],
    "processingTime": 200,
    "results": [
      {
        "count": 1,
        "item": "refinedstorage:quartz_enriched_iron"
      },
      {
        "count": 1,
        "item": "refinedstorage:quartz_enriched_iron_block"
      }
    ]
  })
  event.recipes.create.crushing('mekanism:dust_quartz', 'quartz')
    event.custom({
      "type": "create:item_application",
      "ingredients": [
      {
      "tag": "minecraft:stone_tool_materials"
      },
      {
      "item": "refinedstorage:quartz_enriched_iron"
      }
    ],
    "results": [
      {
      "item": "refinedstorage:machine_casing"
      }
    ]
    })
    //create teleporters
    event.custom({
      "type": "create:item_application",
      "ingredients": [
        {
          "item": "create:brass_casing"
        },
        {
          "item": "createteleporters:quantum_fluid_bucket"
        }
      ],
      "results": [
        {
          "item": "createteleporters:quantum_casing"
        },
      ]
    })
    //mekanism
    event.recipes.vintageimprovementsHammering(Item.of('vintageimprovements:osmium_sheet', 1), 'mekanism:ingot_osmium', 3)
    event.recipes.create.pressing('kubejs:magnetic_plate', 'tfmg:magnetic_ingot')
    event.custom({
      "type":"createaddition:rolling",
      "input": {
            "item": "tfmg:magnetic_ingot"
      },
      "result": {
        "item": "kubejs:magnetic_rod",
        "count": 2
      }
    })
  event.custom({
    "type":"createaddition:rolling",
    "input": {
          "item": "kubejs:magnetic_plate"
    },
    "result": {
      "item": "kubejs:magnetic_wire",
      "count": 2
    }
  })
  //crushing uniformity
  const oretype = ["tin", "osmium", "uranium", "lead", "nickel", "lithium", "tungsten"]
  const oremod = ["mekanism", "mekanism", "mekanism", "mekanism", "tfmg", "tfmg", "createloveandwar"]
  const crushmod = ["create", "create", "create", "create", "create", "kubejs", "kubejs"]
  for (let i = 0; i < oretype.length; i++) {
    event.recipes.create.crushing([Item.of('2x ' + crushmod[i] + ':crushed_raw_' + oretype[i]), Item.of(crushmod[i] + ':crushed_raw_' + oretype[i]).withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('cobbled_deepslate').withChance(0.12)], (oremod[i] + ':deepslate_' + oretype[i] + '_ore'))
    event.recipes.create.crushing([Item.of(crushmod[i] + ':crushed_raw_' + oretype[i]), Item.of(crushmod[i] + ':crushed_raw_' + oretype[i]).withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('cobbled_deepslate').withChance(0.12)], (oremod[i] + ':' + oretype[i] + '_ore'))
    event.recipes.create.crushing([Item.of(crushmod[i] + ':crushed_raw_' + oretype[i]), Item.of(crushmod[i] + ':crushed_raw_' + oretype[i]).withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('cobbled_deepslate').withChance(0.12)], ('mekanismaaa:moon_' + oretype[i] + '_ore'))
    event.recipes.create.crushing([Item.of(crushmod[i] + ':crushed_raw_' + oretype[i]), Item.of(crushmod[i] + ':crushed_raw_' + oretype[i]).withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('cobbled_deepslate').withChance(0.12)], ('mekanismaaa:mars_' + oretype[i] + '_ore'))
    event.recipes.create.crushing([Item.of(crushmod[i] + ':crushed_raw_' + oretype[i]), Item.of(crushmod[i] + ':crushed_raw_' + oretype[i]).withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('cobbled_deepslate').withChance(0.12)], ('mekanismaaa:mercury_' + oretype[i] + '_ore'))
    event.recipes.create.crushing([Item.of(crushmod[i] + ':crushed_raw_' + oretype[i]), Item.of(crushmod[i] + ':crushed_raw_' + oretype[i]).withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('cobbled_deepslate').withChance(0.12)], ('mekanismaaa:venus_' + oretype[i] + '_ore'))
    event.recipes.create.crushing([Item.of(crushmod[i] + ':crushed_raw_' + oretype[i]), Item.of(crushmod[i] + ':crushed_raw_' + oretype[i]).withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('cobbled_deepslate').withChance(0.12)], ('mekanismaaa:glacio_' + oretype[i] + '_ore'))
  }
  event.recipes.create.crushing(['3x tfmg:sulfur_dust', Item.of('create:experience_nugget').withChance(0.75), Item.of('netherrack').withChance(0.12)], 'createloveandwar:nether_sulphur_ore')
  event.recipes.create.crushing(['3x tfmg:sulfur_dust', Item.of('tfmg:sulfur_dust').withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('cobblestone').withChance(0.12)], 'createloveandwar:sulphur_ore')
  event.recipes.create.crushing(['5x tfmg:sulfur_dust', Item.of('tfmg:sulfur_dust').withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('cobbled_deepslate').withChance(0.12)], 'createloveandwar:deepslate_sulphur_ore')
  event.recipes.create.crushing(['3x mekanism:fluorite_gem', Item.of('mekanism:fluorite_gem').withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('cobblestone').withChance(0.12)], 'mekanism:fluorite_ore')
  event.recipes.create.crushing(['5x mekanism:fluorite_gem', Item.of('mekanism:fluorite_gem').withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('cobbled_deepslate').withChance(0.12)], 'mekanism:deepslate_fluorite_ore')
  event.recipes.create.crushing(['kubejs:crushed_raw_lithium', Item.of('create:experience_nugget').withChance(0.75)], 'tfmg:raw_lithium')
  event.recipes.create.crushing(['kubejs:crushed_raw_tungsten', Item.of('create:experience_nugget').withChance(0.75)], 'createloveandwar:raw_tungsten')
  event.recipes.create.crushing('mekanism:dust_copper', 'copper_ingot')
  event.recipes.create.crushing('mekanism:dust_gold', 'gold_ingot')
  event.recipes.create.crushing('mekanism:dust_emerald', 'emerald')
  event.recipes.create.crushing('mekanism:dust_coal', 'coal')
  event.recipes.create.crushing('mekanism:dust_charcoal', 'charcoal')
  event.recipes.create.crushing('mekanism:dust_lapis_lazuli', 'lapis_lazuli')
  event.replaceOutput(
    {id: 'createaddition:crushing/diamond'},
    'createaddition:diamond_grit',
    'mekanism:dust_diamond'
  )
  event.recipes.create.crushing('mekanism:dust_tin', 'mekanism:ingot_tin')
  event.recipes.create.crushing('mekanism:dust_osmium', 'mekanism:ingot_osmium')
  event.recipes.create.crushing('mekanism:dust_uranium', 'mekanism:ingot_uranium')
  event.recipes.create.crushing('mekanism:dust_fluorite', 'mekanism:fluorite_gem')
  event.recipes.create.crushing('mekanism:dust_lead', 'tfmg:lead_ingot')
  event.recipes.create.crushing('mekanism:dust_netherite', 'netherite_ingot')
  event.recipes.create.crushing('mekanism:dust_bronze', 'mekanism:ingot_bronze')
  event.recipes.create.crushing('mekanism:dust_steel', 'tfmg:steel_ingot')
  event.recipes.create.crushing('kubejs:dust_nickel', 'tfmg:nickel_ingot')
  event.recipes.create.crushing('mekanism:dust_lithium', 'tfmg:lithium_ingot')
  event.recipes.create.crushing('kubejs:dust_zinc', 'create:zinc_ingot')
  event.recipes.create.crushing('kubejs:dust_tungsten', 'createloveandwar:tungsten')
  event.recipes.create.crushing('kubejs:dust_desh', 'ad_astra:desh_ingot')
  event.recipes.create.crushing('kubejs:dust_ostrum', 'ad_astra:ostrum_ingot')
  event.recipes.create.crushing('kubejs:dust_calorite', 'ad_astra:calorite_ingot')
  event.recipes.create.crushing('kubejs:dust_ice_shard', 'ad_astra:ice_shard')
  event.recipes.create.crushing(['9x kubejs:crushed_raw_tungsten', Item.of('create:experience_nugget', 9).withChance(0.75)], 'createloveandwar:raw_tungsten_block')
  event.recipes.create.crushing(['9x create:crushed_raw_nickel', Item.of('create:experience_nugget', 9).withChance(0.75)], 'kubejs:block_raw_nickel')
  event.recipes.create.crushing(['9x kubejs:crushed_raw_lithium', Item.of('create:experience_nugget', 9).withChance(0.75)], 'kubejs:block_raw_lithium')
  event.recipes.create.crushing(['9x tfmg:sulfur_dust', Item.of('create:experience_nugget', 9).withChance(0.75)], 'alexscaves:sulfur')
  const mat = ['calorite', 'desh', 'nickel', 'ostrum', 'tungsten', 'zinc', 'lithium', 'copper', 'gold', 'iron', 'tin', 'osmium', 'uranium', 'lead']
  for (let i = 0; i < 7; i++) {
    event.recipes.create.crushing('kubejs:dirty_dust_' + mat[i], 'kubejs:clump_' + mat[i])
  }
  for (let i = 7; i < mat.length; i++) {
    event.recipes.create.crushing('mekanism:dirty_dust_' + mat[i], 'mekanism:clump_' + mat[i])
  }
  event.recipes.create.crushing('kubejs:dirty_dust_etrium', 'kubejs:clump_etrium')
  event.recipes.create.crushing('kubejs:dust_etrium', 'ad_astra:etrium_ingot')
  //ad astra
  event.recipes.vintageimprovementsHammering(Item.of('ad_astra:desh_plate', 1), 'ad_astra:desh_ingot', 3)
  event.recipes.vintageimprovementsHammering(Item.of('ad_astra:ostrum_plate', 1), 'ad_astra:ostrum_ingot', 3)
  event.recipes.vintageimprovementsHammering(Item.of('ad_astra:calorite_plate', 1), 'ad_astra:calorite_ingot', 3)
  event.recipes.create.mixing(Fluid.of('kubejs:heat_shield_coating', 300), ['tfmg:coal_coke_dust', 'mekanism:dust_quartz', 'magma_cream']).superheated()
  event.recipes.create.filling('kubejs:basic_rocket_plating', [Fluid.of('kubejs:heat_shield_coating', 100), 'tfmg:heavy_plate'])
  event.recipes.create.splashing(Item.of('kubejs:shard_etrium').withChance(0.05), 'ad_astra:moon_sand')
  event.recipes.create.splashing(Item.of('kubejs:shard_etrium').withChance(0.05), 'ad_astra:mars_sand')
  event.custom({
      "type":"createaddition:rolling",
      "input": {
            "item": "ad_astra:etrium_ingot"
      },
      "result": {
        "item": "ad_astra:etrium_rod",
        "count": 2
      }
  })
  event.recipes.create.pressing('ad_astra:etrium_plate', 'ad_astra:etrium_ingot')
  //refining
  event.custom({
  "type": "tfmg:distillation",
  "ingredients": [

    {
      "fluid": "tfmg:propane",
      "nbt": {},
      "amount": 240
    }
  ],
  "results": [
    {
      "amount": 80,
      "fluid": "tfmg:propylene"
    },
    {
      "amount": 60,
      "fluid": "tfmg:ethylene"
    },
    {
      "fluid": "ad_astra:hydrogen",
      "amount": 40
    }
  ]})
  event.custom({
  "type": "tfmg:distillation",
  "ingredients": [

    {
      "fluid": "ad_astra:oil",
      "nbt": {},
      "amount": 400
    }
  ],
  "results": [
    {
      "fluid": "tfmg:kerosene",
      "amount": 80
    },
    {
      "fluid": "tfmg:naphtha",
      "amount": 60
    },
    {
      "fluid": "tfmg:gasoline",
      "amount": 40
    },
    {
      "fluid": "tfmg:butane",
      "amount": 40
    },
    {
      "fluid": "tfmg:propane",
      "amount": 80
    }
  ]})
  event.custom({
  "type": "tfmg:distillation",
  "ingredients": [

    {
      "fluid": "createloveandwar:crude_oil",
      "nbt": {},
      "amount": 400
    }
  ],
  "results": [
    {
      "fluid": "tfmg:diesel",
      "amount": 80
    },
    {
      "fluid": "tfmg:kerosene",
      "amount": 60
    },
    {
      "fluid": "tfmg:naphtha",
      "amount": 40
    },
    {
      "fluid": "tfmg:gasoline",
      "amount": 40
    },
    {
      "fluid": "tfmg:lpg",
      "amount": 80
    }
  ]})
  //liquid burning
  event.custom({
	"type":"createaddition:liquid_burning",
	"input": {
      	"fluid": "tfmg:butane",
      	"amount": 1000
	},
	"burnTime": 24000,
	"superheated": true
  })
  event.custom({
	"type":"createaddition:liquid_burning",
	"input": {
      	"fluid": "tfmg:propane",
      	"amount": 1000
	},
	"burnTime": 24000,
	"superheated": true
  })
  event.custom({
	"type":"createaddition:liquid_burning",
	"input": {
      	"fluid": "tfmg:kerosene",
      	"amount": 1000
	},
	"burnTime": 36000,
	"superheated": true
  })
  //confectionery
  event.recipes.create.mixing(Fluid.of('create_confectionery:hot_chocolate', 500), [Fluid.of('milk', 250), Fluid.of('create:chocolate', 250), 'sugar'])
  //garnished
  event.recipes.create.milling(['tfmg:limesand', 'mekanism:salt'], 'create:limestone')
  event.recipes.create.milling('2x endersdelight:sight_fragment', 'endersdelight:enderman_sight')
  const dyes = ['white', 'red', 'orange', 'yellow', 'green', 'lime', 'light_blue', 'cyan', 'blue', 'purple', 'magenta', 'pink', 'light_gray', 'gray', 'brown', 'black']
  event.recipes.create.compacting('garnished:mastic_resin', [Fluid.of('kubejs:slime_resin', 250), '3x minecraft:wheat_seeds']).heated()
  for (let i = 0; i < dyes.length; i++) {
    event.recipes.create.compacting('garnished:mastic_resin_' + dyes[i], [Fluid.of('kubejs:slime_resin', 250), '3x minecraft:wheat_seeds', dyes[i] + '_dye']).heated()
    freezeextra('garnished:mastic_paste_' + dyes[i], dyes[i] + '_dye', dyes[i] + '_dye', 0.25)
  }
  freeze('blackstone', 'end_stone')
  freeze('soul_sand', 'soul_soil')
  freeze('garnished:mastic_resin_blue', 'garnished:icy_mastic_chunk')
  freeze('magma_block', 'netherrack')
  freeze('#garnished:kelp_blocks', 'dried_kelp_block')
  freezeextra('garnished:garnish_powder', 'sugar', 'sugar', 0.25)
  freeze('apple', 'garnished:chilled_apple')
  freeze('chorus_plant', 'chorus_flower')
  freeze('#garnished:kelp', 'minecraft:kelp')
  freeze('sugar', 'garnished:frost')
  freeze('create:cinder_flour', 'garnished:brittle_dust')
  freeze('seagrass', 'garnished:voltaic_sea_grass')
  freeze('create:scorchia', 'create:scoria')
  freeze('garnished:volatile_dust', 'garnished:void_dust')

  //alex cave
  event.recipes.create.filling('alexscaves:caramel_apple', [Fluid.of('create_confectionery:caramel', 250), 'apple'])
  const frostcut = ['block', 'stairs', 'slab', 'wall', 'door', 'bricks', 'brick_stairs', 'brick_slab', 'brick_wall']
  for (let i = 0; i < frostcut.length; i++) {
    freeze('alexscaves:gingerbread_' + frostcut[i], 'alexscaves:frosted_gingerbread_' + frostcut[i])
    event.recipes.create.deploying('alexscaves:frosted_gingerbread_' + frostcut[i], ['alexscaves:gingerbread_' + frostcut[i], 'garnished:frost'])
  }
  event.recipes.create.crushing(['alexscaves:raw_azure_neodymium', Item.of('alexscaves:raw_azure_neodymium').withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('alexscaves:galena').withChance(0.12)], 'alexscaves:energized_galena_azure')
  event.recipes.create.crushing(['alexscaves:raw_scarlet_neodymium', Item.of('alexscaves:raw_scarlet_neodymium').withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('alexscaves:galena').withChance(0.12)], 'alexscaves:energized_galena_scarlet')
  event.recipes.create.crushing([Item.of('alexscaves:raw_scarlet_neodymium').withChance(0.50), Item.of('alexscaves:raw_azure_neodymium').withChance(0.50), Item.of('alexscaves:raw_scarlet_neodymium').withChance(0.12), Item.of('alexscaves:raw_azure_neodymium').withChance(0.12), Item.of('create:experience_nugget').withChance(0.75), Item.of('alexscaves:galena').withChance(0.12)], 'alexscaves:energized_galena_neutral')
  event.recipes.create.crushing(['1x iron_nugget', Item.of('create:crushed_raw_iron').withChance(0.001)], 'alexscaves:galena')
  event.recipes.create.crushing([Item.of('bone_meal').withChance(0.5), Item.of('bone').withChance(0.25), Item.of('alexscaves:heavy_bone').withChance(0.25)], 'alexscaves:limestone')
  event.recipes.create.crushing(['coal', Item.of('coal').withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('alexscaves:coprolith').withChance(0.12)], 'alexscaves:coprolith_coal_ore')
  event.recipes.create.crushing(['6x redstone', Item.of('redstone').withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('alexscaves:guanostone').withChance(0.12)], 'alexscaves:guanostone_redstone_ore')
  freeze('alexscaves:block_of_chocolate', 'alexscaves:block_of_frosted_chocolate')
  event.recipes.create.deploying('alexscaves:block_of_frosted_chocolate', ['alexscaves:block_of_chocolate', 'garnished:frost'])
  event.recipes.create.crushing(['kubejs:thorium', Item.of('kubejs:thorium').withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('alexscaves:radrock').withChance(0.12)], 'alexscaves:radrock_uranium_ore')
  //call of yucutan
  event.recipes.create.crushing(['call_of_yucutan:jade', Item.of('call_of_yucutan:jade').withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('cobblestone').withChance(0.12)], 'call_of_yucutan:jade_ore')
  event.recipes.create.crushing(['2x call_of_yucutan:jade', Item.of('call_of_yucutan:jade').withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('cobbled_deepslate').withChance(0.12)], 'call_of_yucutan:deepslate_jade_ore')
  //unusual end
  event.recipes.create.crushing(['2x unusualend:prismalite_shard', Item.of('unusualend:prismalite_shard').withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('unusualend:gloopslate').withChance(0.12)], 'unusualend:prismalitic_gloopslate')
  event.recipes.create.crushing(['2x unusualend:shiny_crystal', Item.of('unusualend:shiny_crystal').withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('unusualend:gloopstone').withChance(0.12)], 'unusualend:shiny_gloopstone')
})