#include <iostream>
#include <string>
#include <cstdlib>
using namespace std;

// 存檔 test.cpp
// g++ -o test test.cpp
// hdparm --user-master u --security-set-pass myPwd /dev/sda
// hdparm --user-master u --security-unlock myPwd /dev/sda
// hdparm --user-master u --security-disable myPwd /dev/sda

int runCommand(string command); // 宣告 runCommand() 函式

int main(int argc, char *argv[]) 
{
    int aa = 0;

    // 檔案名稱必須和裝置名稱相同
    string myDev = argv[0];
    try{
        myDev  = myDev.replace(myDev.find("."), 2, "");
        myDev  = myDev.replace(myDev.find("/"), 2, "");
    }catch (std::exception &e){}

    // 移除 partion 流水號
    string myDisk = myDev;
    try{myDisk = myDisk.replace(myDisk.find("1"), 2, "");
    }catch (std::exception &e){}
    try{myDisk = myDisk.replace(myDisk.find("2"), 2, "");
    }catch (std::exception &e){}
    try{myDisk = myDisk.replace(myDisk.find("3"), 2, "");
    }catch (std::exception &e){}
    try{myDisk = myDisk.replace(myDisk.find("4"), 2, "");
    }catch (std::exception &e){}

    // 設定相關指令
    try{
        string str1      = argv[1];
        string str2      = "r****";
        string diskPwd   = "r****";
        string folderPwd = "r****";
        string cmd  = "";
        if ( str1 == str2 )
        {
            cmd = "sudo hdparm --user-master u --security-unlock " + diskPwd + " /dev/" + myDisk + " >/dev/null";
            aa = runCommand(cmd);

            cmd = "echo pq | sudo fdisk /dev/" + myDisk;
            aa = runCommand(cmd);
            aa = runCommand("clear");

            aa = runCommand("sleep 3");

            cmd = "sudo mkdir /" + myDev + " 2>/dev/null";
            aa = runCommand(cmd);

            cmd = "sudo mount /dev/" + myDev + " /" + myDev + " 2>/dev/null";
            aa = runCommand(cmd);

            cmd = "sudo mkdir /" + myDev + "/.System\\ Information\\ Volumes" + " 2>/dev/null";
            aa = runCommand(cmd);

            cmd = "sudo mkdir /var/opt/" + myDev + " 2>/dev/null";
            aa = runCommand(cmd);

            cmd = "sudo encfs /" + myDev + "/.System\\ Information\\ Volumes/ /var/opt/" + myDev + "/ -o allow_other -o uid=1000 --extpass='echo " + folderPwd + "'";
            aa = runCommand(cmd);

        }else{aa = runCommand("clear");}

    }catch (std::exception &e){aa = runCommand("clear");}

    // aa = runCommand("rm -f /home/user/.bash_history 2> /dev/null");
    // aa = runCommand("sudo rm -f /root/.bash_history 2> /dev/null");
    // aa = runCommand("sudo find /var/log/ -name '*log*' -type f -delete");
    // aa = runCommand("sudo find /var/log/ -name '*.gz' -type f -delete");
    // cout << cmd2;
    // printf("\n");

    return 0;
}

int runCommand(string command) 
{
    char buffer[128];
    FILE* pipe = popen(command.c_str(), "r");
    if (!pipe)
    {
        cerr << "執行命令失敗！" << endl;
        return 1;
    }
    while (fgets(buffer, sizeof(buffer), pipe) != NULL) 
    {
        cout << buffer;
    }
    pclose(pipe);
    return 0;
}

