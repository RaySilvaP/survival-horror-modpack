const itemsToRemove = [
  // Alex's Caves
  'alexscaves:diving_chestplate',
  'alexscaves:diving_helmet',
  'alexscaves:diving_leggings',
  'alexscaves:diving_boots',

  // Thalassophobia
  'thalassophobia:scuba_gear_helmet',
  'thalassophobia:scuba_gear_chestplate',
  'thalassophobia:scuba_gear_leggings',
  'thalassophobia:scuba_gear_boots',
  'thalassophobia:oxygen_tank',
  'thalassophobia:fin'
];

ServerEvents.recipes(event => {
  itemsToRemove.forEach(item => {
    event.remove({ output: item });
  });
});

LootJS.modifiers((event) => {
  [
    LootType.CHEST,
    LootType.ENTITY,
    LootType.BLOCK,
    LootType.FISHING,
    LootType.GIFT
  ].forEach(type => {
    event.addLootTypeModifier(type)
      .removeLoot(itemsToRemove);
  })
});
