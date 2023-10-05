
// Fabric Modding Tutorial - Minecraft 1.20: Workspace Setup | #1
// https://www.youtube.com/watch?v=0Pr_iHlVKsI&list=PLKGarocXCE1EO43Dlf5JGh7Yk-kRAXUEJ&index=1

// Fabric Modding Tutorial - Minecraft 1.20: Custom Items & Creative Mode Tab | #2
// https://www.youtube.com/watch?v=5ms6RiR4SQ4&list=PLKGarocXCE1EO43Dlf5JGh7Yk-kRAXUEJ&index=3


// https://fabricmc.net/develop/template/
// Mod Name: Tutorial Mod
// Mod ID: tutorialmod
// Package Name: net.kaupenjoe.tutorialmod
// 1.20.1
// 打勾 Data Generation



// #####################################################################################################
// TutorialMod 類別是模組的主類別，它負責註冊模組的物品類別和物品。
// src\main\java\net\kaupenjoe\tutorialmod\TutorialMod.java

package net.kaupenjoe.tutorialmod;
import net.fabricmc.api.ModInitializer; //此行導入 Fabric Mod 程式庫的 ModInitializer 介面。ModInitializer 介面定義了一個 onInitialize() 方法，用於在模組載入時初始化模組。
import net.kaupenjoe.tutorialmod.item.ModItemGroups; //此行導入了模組的 物品註冊類別。 
import net.kaupenjoe.tutorialmod.item.ModItems;      //此行導入了模組的 物品類別。

// 此行導入了 slf4j 程式庫的 Logger 和 LoggerFactory 類別。slf4j 是一個用於記錄日誌的程式庫。
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

// 此行宣告了一個名為 TutorialMod 的類別。此類別繼承了 ModInitializer 介面，並實作了 onInitialize() 方法。
public class TutorialMod implements ModInitializer {
    
    // 此兩行宣告了模組的 ID 和日誌記錄器。模組 ID 用於指定模組的名稱，日誌記錄器用於記錄模組的日誌。
	public static final String MOD_ID = "tutorialmod";
    public static final Logger LOGGER = LoggerFactory.getLogger(MOD_ID);

    // 此方法是 ModInitializer 介面的預設方法。它將在模組載入時被呼叫。
    // 此方法中呼叫了 ModItemGroups.registerItemGroups() 和 ModItems.registerModItems() 方法來註冊模組的物品類別和物品。
	@Override
	public void onInitialize() {
		ModItemGroups.registerItemGroups();
		ModItems.registerModItems();
	}
}


// #####################################################################################################
// src\main\resources\assets\fabric_mod.json








// #####################################################################################################
// src\main\java\net\kaupenjoe\tutorialmod\item\ModItemGroups.java
package net.kaupenjoe.tutorialmod.item;
import net.fabricmc.fabric.api.itemgroup.v1.FabricItemGroup; // 這是從 Fabric API 導入的 FabricItemGroup 類。此類允許您創建自定義項目組。
import net.kaupenjoe.tutorialmod.TutorialMod;
import net.minecraft.item.ItemGroup; // 這是從 Minecraft 導入的 ItemGroups 類。此類包含 Minecraft 中的所有默認項目組。
import net.minecraft.item.ItemStack; // 這是從 Minecraft 導入的 ItemStack 類。此類表示 Minecraft 中物品的堆棧。
import net.minecraft.item.Items; // 這是從 Minecraft 導入的 Items 類。此類包含 Minecraft 中的所有默認物品。
import net.minecraft.registry.Registries; // 這是從 Minecraft 導入的 Registries 類。此類提供對遊戲中所有註冊表的訪問，包括物品註冊表。
import net.minecraft.registry.Registry; // 這是從 Minecraft 導入的 Registry 類。此類表示一個包含物品等對象的註冊表。
import net.minecraft.text.Text; // 這是從 Minecraft 導入的 Text 類。此類表示 Minecraft 中的文字。
import net.minecraft.util.Identifier; // 這是從 Minecraft 導入的 Identifier 類。此類表示 Minecraft 對象的唯一標識符。

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


// #####################################################################################################
// src\main\java\net\kaupenjoe\tutorialmod\item\ModItems.java
package net.kaupenjoe.tutorialmod.item;
import net.fabricmc.fabric.api.item.v1.FabricItemSettings;  // 這是從 Fabric API 導入的 FabricItemSettings 類。此類用於配置 Fabric 模組中創建的新項目的設置。
import net.fabricmc.fabric.api.itemgroup.v1.FabricItemGroupEntries; // 這是從 Fabric API 導入的 FabricItemGroupEntries 類。此類用於將新項目註冊到現有的項目組。
import net.fabricmc.fabric.api.itemgroup.v1.ItemGroupEvents; // 這是從 Fabric API 導入的 ItemGroupEvents 類。此類提供事件，可用於修改項目組的行為。
import net.kaupenjoe.tutorialmod.TutorialMod;
import net.minecraft.item.Item; // 這是從 Minecraft 導入的 Item 類。此類表示 Minecraft 中的物品。
import net.minecraft.item.ItemGroups; // 這是從 Minecraft 導入的 ItemGroups 類。此類包含 Minecraft 中的所有默認項目組。
import net.minecraft.registry.Registries; // 這是從 Minecraft 導入的 Registries 類。此類提供對遊戲中所有註冊表的訪問，包括物品註冊表。
import net.minecraft.registry.Registry; // 這是從 Minecraft 導入的 Registry 類。此類表示一個包含物品等對象的註冊表。
import net.minecraft.util.Identifier; // 這是從 Minecraft 導入的 Identifier 類。此類表示 Minecraft 對象的唯一標識符。


//此行宣告了一個名為 ModItems 的類別。此類別包含了註冊模組物品的程式碼。
public class ModItems {

    //此兩行註冊了兩個新的物品：Ruby 和 Raw Ruby。
    //registerItem() 函式接受兩個參數：物品名稱和物品設定。
    //物品設定用於指定物品的屬性，例如堆疊大小、材質、創意模式分類等。
    public static final Item RUBY = registerItem("ruby", new Item(new FabricItemSettings())); //註冊 Ruby
    public static final Item RAW_RUBY = registerItem("raw_ruby", new Item(new FabricItemSettings())); //註冊 Raw Ruby

    // 此函式將 RUBY 和 RAW_RUBY 物品加入到 Ingredient Tab 群組中。
    // Ingredient Tab 群組是 Minecraft 預設的創意模式分類之一，用於存放所有與製作相關的物品。
    private static void addItemsToIngredientTabItemGroup(FabricItemGroupEntries entries){
        entries.add(RUBY);
        entries.add(RAW_RUBY);
    }

    // 此函式用於註冊新的物品。
    // Registry.register() 函式將物品添加到 Minecraft 的物品註冊表中。
    public static Item registerItem(String name, Item item){
        return Registry.register(Registries.ITEM, new Identifier(TutorialMod.MOD_ID, name), item);
    }


    // 此函式用于註冊所有模組的物品。
    // 它會先註冊 RUBY 和 RAW_RUBY 物品，然後將它們加入到 Ingredient Tab 群組中。
    // 總而言之，ModItems 類別用於註冊模組的物品並將它們加入到創意模式分類中。
    public static void registerModItems(){
        TutorialMod.LOGGER.info("Registering Mod Items for " + TutorialMod.MOD_ID);
        ItemGroupEvents.modifyEntriesEvent(ItemGroups.INGREDIENTS).register(ModItems::addItemsToIngredientTabItemGroup);

    }
}


// #####################################################################################################
// src\main\java\net\kaupenjoe\tutorialmod\TutorialModClient.java
package net.kaupenjoe.tutorialmod;
import net.fabricmc.api.ClientModInitializer;
public class  TutorialModClient implements ClientModInitializer {

    @Override
    public void onInitializeClient() {

    }
}

// #####################################################################################################
// src\main\resources\assets\tutorialmod\lang\en_us.json
{
    "item.tutorialmod.ruby": "Ruby",
    "item.tutorialmod.raw_ruby": "RAW Ruby",
    "itemgroup.ruby": "Ruby Tutorial Group"
}


// #####################################################################################################
// src\main\resources\assets\tutorialmod\models\item\ruby.json
{
    "parent": "item/generated",
    "textures": {
      "layer0": "tutorialmod:item/ruby"
    }
}


// #####################################################################################################
// src\main\resources\assets\tutorialmod\models\item\raw_ruby.json
{
    "parent": "item/generated",
    "textures": {
      "layer0": "tutorialmod:item/raw_ruby"
    }
}


// #####################################################################################################
// src\main\resources\assets\tutorialmod\textures\item\ruby.png
// src\main\resources\assets\tutorialmod\textures\item\raw_ruby.png