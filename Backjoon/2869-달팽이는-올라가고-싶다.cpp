#include <iostream>
#include <cmath>

using namespace std;

int main(void)
{
	int A, B, V;
	cin >> A >> B >> V;
	
	double result = ceil((double)(V-A)/(A-B) + 1.0);
	
	cout << (int)result << endl;
	return 0;
}