#include <iostream>

using namespace std;

int main(void) {
	int N, M, K;
	cin >> N >> M >> K;
	
	int nRemainder = N%2;
	int nMatch = (N-nRemainder)/2;
	
	K -= nRemainder;
	
	while(K > 0) {
		if(M >= nMatch) {
			M--;
			K--;
		} else {
			nMatch--;
			K-=2;
		}
	}
	
	int team = (nMatch>=M) ? M : nMatch;
	
	cout << team << endl;
		
	return 0;
}