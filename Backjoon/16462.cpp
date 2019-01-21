#include <iostream>
#include <cmath>

using namespace std;

int main(void)
{
	int N = 0;
	cin >> N;

	int *Point = new int[N];
	for(int i=0; i<N; i++) {
		cin >> Point[i];
		if(Point[i] == 0 || Point[i] == 6) Point[i] = 9;
		else if(Point[i] == 60 || Point[i] == 66) Point[i] = 99;
		
		if(Point[i] % 10 == 6) Point[i] += 3;
		if(Point[i] % 10 == 0 && Point[i] != 100) Point[i] += 9;
		if(Point[i] / 10 == 6) Point[i] += 30;
	}

	int sum = 0;
	for(int i=0; i<N; i++) {
		sum += Point[i];
	}

	cout << fixed;
	cout.precision(0);
	cout << floor((double)sum/(double)N + 0.5) << endl;

	delete Point;
}
