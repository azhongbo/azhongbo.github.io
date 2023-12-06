#include <iostream>
#include <vector>
#include <fstream>
#include <string>
#include <cstdlib>
#include <stdio.h>
#include <unistd.h>
#include <string.h>

using namespace std;

// 快速變更 /etc/apt/apt.conf 與更新程式
// g++ -o systemUpdate systemUpdate.cpp

void saveFile(string data,string savePath) {
  // ofstream fp("/etc/apt/apt.conf");
  ofstream fp(savePath);
  fp << data;
  fp.close();
}

void runCommand(string command) 
{
    char buffer[128];
    FILE* pipe = popen(command.c_str(), "r");
    if (!pipe)
    {
        cerr << "執行命令失敗！" << endl;
    }
    while (fgets(buffer, sizeof(buffer), pipe) != NULL) 
    {
        cout << buffer;
    }
    pclose(pipe);
}


int main(int argc, char* argv[]) 
{

  std::string aptCommand = "";

  FILE* myCommand = popen("id", "r");
  char buffer[1024];
  fgets(buffer, sizeof(buffer), myCommand);
  pclose(myCommand);

  if (strstr(buffer, "root") != nullptr)
  {
     if (argc >= 2) 
     {
       string arg1 = argv[1];
   
       if (arg1 == "main") 
       {
          string data = "Acquire::http::Proxy \"http://192.168.1.10:8080\";\n";
          saveFile(data,"/etc/apt/apt.conf");
       } else if (arg1 == "clean") 
       {
         runCommand("rm -f /etc/apt/apt.conf");
       } 
       else 
       {
          string data = "Acquire::http::Proxy \"http://127.0.0.1:808" + arg1 + "\";\n";
          saveFile(data,"/etc/apt/apt.conf");

          if (argc >= 3) 
          {
            std::vector<std::string> aptNameList(argv + 2, argv + argc);

            // 將參數連接起來
            std::string aptName = "";
            for (const auto& s : aptNameList) {
              aptName += s + " ";
            }

            // 輸出結果
            aptCommand = "apt update";
            runCommand(aptCommand);

            aptCommand = "apt-get install -y " + aptName;
            runCommand(aptCommand);

            runCommand("rm -f /etc/apt/apt.conf");
          }
       }
     } else 
     {
       cout << "systemUpdate main" << endl;
       cout << "systemUpdate clean" << endl;
     }
  }

  return 0;
}


