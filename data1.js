// ### Pandas ###

// chkData(`
// ##### (data1.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data1.js) 主旨放這裡 #####
// 內容放這裡
// `)


chkData(`
##### (data1.js) Pandas for 迴圈 #####
for index,row in df.iterrows():
    print( row['aa'] , row['bb'] )
`)



chkData(`
##### (data1.js) Series map applymap #####

### Map : 將函數套用到 Series 上每個元素 ###
def myFunc(myStr):
    return myStr.replace(" ","")

df['data'].map(myFunc) ## 使用 function
df['data'].map( lambda e: e.replace(" ","") ) ## 使用匿名函數

### Apply : 將函數套用到 DataFrame 上的行與列 ###
df = pd.DataFrame( [[10,20,30],[40,50,60],[70,80,90]] , columns = ['First','Second','Third'] )
df.apply( lambda e: e.max() - e.min() , axis=1 )  # 行 axis=0   列 axis=1

## ApplyMap : 將函數套用到 DataFrame 上每個元素
df.applymap( lambda e: '-' if pandas.isnull(e) else e )  ## 將缺失值 Nan 換成 -
`)


chkData(`
##### (data1.js) Pandas merge 合併範例 #####
import pandas as pd

names = pd.DataFrame( [ ['1','User1' ],
                        ['2','User2' ],
                        ['3','User3' ]  ] )
names.columns = ['id','Name']

dep = pd.DataFrame( [ ['2' , 'IT'    ],
                      ['3' , 'Sales' ],
                      ['4' , 'HR'    ]  ] )
dep.columns = ['id','DEP']

pd.merge( names , dep , on = 'id' , how='outer' ).fillna('') # 左右全數出來
pd.merge( names , dep , on = 'id' , how='inner' ).fillna('') # 兩邊都有才出來
pd.merge( names , dep , on = 'id' , how='left'  ).fillna('') # 依照左邊
pd.merge( names , dep , on = 'id' , how='right' ).fillna('') # 依照右邊
`)












