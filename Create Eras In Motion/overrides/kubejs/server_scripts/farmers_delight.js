ServerEvents.recipes(event => {
    event.recipes.farmersdelight.cooking(
        ['create:bar_of_chocolate', 'sugar', '#forge:milk'],
        'create_confectionery:hot_chocolate_bottle',
        1,
        200,
        'glass_bottle'
    )
    event.recipes.farmersdelight.cooking(
        ['create:bar_of_chocolate', 'sugar', '#forge:milk', 'create_confectionery:marshmallow'],
        'create_confectionery:soothing_hot_chocolate',
        1,
        200,
        'glass_bottle'
    )
    const nut = ['cashew', 'walnut', 'almond', 'pecan', 'pistachio', 'macadamia', 'peanut', 'hazelnut', 'chestnut']
    for (let i = 0; i < nut.length; i++) {
        event.recipes.farmersdelight.cooking(
        ['garnished:cinder_' + nut[i], 'nether_wart'],
        'garnished:melted_cinder_' + nut[i],
        1,
        200,
        
    )
    }
    //garnished
    event.recipes.farmersdelight.cooking(
        ['2x garnished:void_dust', '2x garnished:ender_jelly', 'shulker_shell', 'garnished:preliminary_nucleus'],
        'garnished:shelled_dumpling',
        1,
        200,
    )
    event.recipes.farmersdelight.cooking(
        ['water_bucket', '2x apple', 'garnished:garnish_compound', '#garnished:cracked_nuts'],
        'garnished:apple_cider',
        1,
        200,
        'glass_bottle'
    )
    event.recipes.farmersdelight.cooking(
        ['water_bucket', '2x apple', 'garnished:garnish_compound', '#garnished:cracked_nuts', '#minecraft:flowers'],
        'garnished:cryptic_apple_cider',
        1,
        200,
        'glass_bottle'
    )
    event.recipes.farmersdelight.cooking(
        ['water_bucket', '2x apple', 'garnished:garnish_compound', '#garnished:cracked_nuts', 'garnished:cashew_fruit'],
        'garnished:bitter_apple_cider',
        1,
        200,
        'glass_bottle'
    )
    event.recipes.farmersdelight.cooking(
        ['water_bucket', '2x garnished:peanut', '2x garnished:garnish_powder'],
        'garnished:apple_cider',
        1,
        200,
        'glass_bottle'
    )
    event.recipes.farmersdelight.cooking(
        ['create:builders_tea', 'garnished:sugar_cube', 'garnished:bok_choy'],
        'garnished:sweet_tea',
        1,
        200,
        'glass_bottle'
    )
    event.recipes.farmersdelight.cooking(
        ['alexscaves:cooked_dinosaur_chop', 'alexscaves:flytrap', 'alexscaves:heavy_bone'],
        'alexscaves:seething_stew',
        1,
        200,
        'bowl'
    )
    event.recipes.farmersdelight.cooking(
        ['alexscaves:cooked_trilocaris_tail', 'alexscaves:cooked_trilocaris_tail', 'alexscaves:tree_star'],
        'alexscaves:primordial_soup',
        1,
        200,
        'bowl'
    )
    //call of yucutan
    event.recipes.farmersdelight.cooking(
        ['cocoa_beans', 'cocoa_beans', 'milk_bucket', 'call_of_yucutan:chili_pepper', 'call_of_yucutan:chili_pepper'],
        'call_of_yucutan:xocolatl',
        1,
        200,
        'bowl'
    )
})