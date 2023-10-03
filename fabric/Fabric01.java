
// Fabric Modding Tutorial - Minecraft 1.20: Workspace Setup | #1
// https://www.youtube.com/watch?v=0Pr_iHlVKsI&list=PLKGarocXCE1EO43Dlf5JGh7Yk-kRAXUEJ&index=1

// Fabric Modding Tutorial - Minecraft 1.20: Custom Items & Creative Mode Tab | #2
// https://www.youtube.com/watch?v=5ms6RiR4SQ4&list=PLKGarocXCE1EO43Dlf5JGh7Yk-kRAXUEJ&index=3


// src\main\java\net\kaupenjoe\tutorialmod\item\ModItemGroups.java
package net.kaupenjoe.tutorialmod.item;
import net.fabricmc.fabric.api.itemgroup.v1.FabricItemGroup;
import net.kaupenjoe.tutorialmod.TutorialMod;
import net.minecraft.item.ItemGroup;
import net.minecraft.item.ItemStack;
import net.minecraft.item.Items;
import net.minecraft.registry.Registries;
import net.minecraft.registry.Registry;
import net.minecraft.text.Text;
import net.minecraft.util.Identifier;

public class ModItemGroups {
    // 設定 群組有哪些物品
    public static final ItemGroup RUBY_GROUP = Registry.register(Registries.ITEM_GROUP,
            new Identifier(TutorialMod.MOD_ID, "ruby"),
            FabricItemGroup.builder().displayName(Text.translatable("itemgroup.ruby")).icon(() -> new ItemStack(ModItems.RUBY)).entries((displayContext, entries) -> {
            entries.add(ModItems.RUBY);
            entries.add(ModItems.RAW_RUBY);
            entries.add(Items.DIAMOND);
            }).build());

    public static void registerItemGroups(){
        TutorialMod.LOGGER.info("Registering Item Groups for "+ TutorialMod.MOD_ID);
    }
}


// src\main\java\net\kaupenjoe\tutorialmod\item\ModItems.java
package net.kaupenjoe.tutorialmod.item;
import net.fabricmc.fabric.api.item.v1.FabricItemSettings;
import net.fabricmc.fabric.api.itemgroup.v1.FabricItemGroupEntries;
import net.fabricmc.fabric.api.itemgroup.v1.ItemGroupEvents;
import net.kaupenjoe.tutorialmod.TutorialMod;
import net.minecraft.item.Item;
import net.minecraft.item.ItemGroups;
import net.minecraft.registry.Registries;
import net.minecraft.registry.Registry;
import net.minecraft.util.Identifier;

public class ModItems {

    public static final Item RUBY = registerItem("ruby", new Item(new FabricItemSettings())); //註冊 Ruby
    public static final Item RAW_RUBY = registerItem("raw_ruby", new Item(new FabricItemSettings())); //註冊 Raw Ruby

    // 將 RUBY RAW RUBY 加入 Ingredient Tab 群組
    private static void addItemsToIngredientTabItemGroup(FabricItemGroupEntries entries){
        entries.add(RUBY);
        entries.add(RAW_RUBY);
    }

    public static Item registerItem(String name, Item item){
        return Registry.register(Registries.ITEM, new Identifier(TutorialMod.MOD_ID, name), item);
    }

    public static void registerModItems(){
        TutorialMod.LOGGER.info("Registering Mod Items for " + TutorialMod.MOD_ID);
        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS).register(ModItems::addItemsToIngredientTabItemGroup);

    }
}

// src\main\java\net\kaupenjoe\tutorialmod\TutorialMod.java
package net.kaupenjoe.tutorialmod;

import net.fabricmc.api.ModInitializer;

import net.kaupenjoe.tutorialmod.item.ModItemGroups;
import net.kaupenjoe.tutorialmod.item.ModItems;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class TutorialMod implements ModInitializer {
    
    //設定 MOD_ID
	public static final String MOD_ID = "tutorialmod";
    public static final Logger LOGGER = LoggerFactory.getLogger(MOD_ID);

	@Override
	public void onInitialize() {
		ModItemGroups.registerItemGroups();
		ModItems.registerModItems();
	}
}

// src\main\java\net\kaupenjoe\tutorialmod\TutorialModClient.java
package net.kaupenjoe.tutorialmod;
import net.fabricmc.api.ClientModInitializer;
public class  TutorialModClient implements ClientModInitializer {

    @Override
    public void onInitializeClient() {

    }
}


// src\main\resources\assets\tutorialmod\lang\en_us.json
{
    "item.tutorialmod.ruby": "Ruby",
    "item.tutorialmod.raw_ruby": "RAW Ruby",
    "itemgroup.ruby": "Ruby Tutorial Group"
}

// src\main\resources\assets\tutorialmod\models\item\ruby.json
{
    "parent": "item/generated",
    "textures": {
      "layer0": "tutorialmod:item/ruby"
    }
}

// src\main\resources\assets\tutorialmod\models\item\raw_ruby.json
{
    "parent": "item/generated",
    "textures": {
      "layer0": "tutorialmod:item/raw_ruby"
    }
}

// src\main\resources\assets\tutorialmod\textures\item\ruby.png
// src\main\resources\assets\tutorialmod\textures\item\raw_ruby.png