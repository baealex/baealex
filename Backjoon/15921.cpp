/*
#include <iostream>
#include <math.h>

using namespace std;

int main(void)
{
    int N = 0;
    cin >> N;

    if(N == 0) {
        cout << "divide by zero" << endl;
	}

    else {
        int *Value = new int[N];
        int Sum = 0;
        float expectedValue = 0;
        float averageValue = 0;

        for(int i=0;i<N;i++) {
            cin >> Value[i];
            Sum += Value[i];
            expectedValue += Value[i] / N;
        }

		if(Sum == 0) {
			cout << "divide by zero" << endl;
		}

		else {
        	averageValue = (float)Sum / (float)N;

        	float Result = averageValue / expectedValue;
        	cout << fixed;
        	cout.precision(2);
        	cout << Result << endl;
		}
    }
    return 0;
}
*/

#include <iostream>
using namespace std;

int n;
int sum;
int main() {
	cin >> n;
	for (int i = 0; i < n; i++) {
		int x;
		cin >> x;
		sum += x;
	}
	if (sum == 0) {
		cout << "divide by zero";
		return 0;
	}
	cout << "1.00";
}