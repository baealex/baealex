#include <iostream>
using namespace std;

int main(void)
{
	int a=0, sum=0;
	cin >> a;
	char *b = new char[a];
	cin >> b;
	for(int i=0; i<a; i++) {
		sum += (int)b[i]-48;
	}
	cout << sum << endl;
	return 0;
}