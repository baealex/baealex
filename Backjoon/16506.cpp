#include <iostream>

using namespace std;

struct OPCODE {
    char code[6];
    char binary[5];
};

int main(void)
{
    // 자주 사용되는 애들을 상위에 배치하자
    struct OPCODE opcode[23] = {
        {"ADD", "0000"},
        {"AND", "0011"},
        {"SUB", "0001"},
        {"MOV", "0010"},
        {"OR", "0100"},
        {"NOT", "0101"},
        {"MULT", "0110"},
        {"LSFTL", "0111"},
        {"LSFTR", "1000"},
        {"ASFTR", "1001"},
        {"RL", "1010"},
        {"RR", "1011"}
    };

    int N = 0;
    cin >> N;

    char parse_code[6];
    int parse_code_sum=0;
    int a=0, b=0, c=0;

    for(int i=0; i<N; i++)
    {
        //cin >> parse_code >> a >> b >> c;
        cin >> parse_code;
        for(int j=0;j<6;j++)
        {
            parse_code_sum += (int)parse_code[j];
            cout << parse_code[j] << " " << (int)parse_code[j] << endl;
        }
    }
    cout << parse_code_sum << endl;
    return 0;
}