
// STATE : DONE

#include <iostream>

int main(void) {
    using namespace std;
    int A, B, C;
    cin >> A >> B >> C;
    cout << (A+B)%C << endl << (A%C+B%C)%C << endl << (A*B)%C << endl << (A%C*B%C)%C << endl;
    return 0;
}