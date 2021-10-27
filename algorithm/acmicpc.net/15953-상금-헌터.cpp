
// STATE : DONE

#include <iostream>

using namespace std;

int seg(int x) {
	int sum = 0;
	for(int i=1; i<=x; i++){
		sum += i;
	}
	return sum;
}

int squr_2_seg(int x) {
	int sum = 0;
	int squr = 1;
	for(int i=1; i<=x; i++){
		sum += squr;
		squr *= 2;
	}
	return sum;
}

int KakaoFestival_No1(int rank) {
	if(rank == 0) {
		return 0;
	}
	else if(rank <= seg(1)) {
		return 500;
	}
	else if(rank <= seg(2)) {
		return 300;
	}
	else if(rank <= seg(3)) {
		return 200;
	}
	else if(rank <= seg(4)) {
		return 50;
	}
	else if(rank <= seg(5)) {
		return 30;
	}
	else if(rank <= seg(6)) {
		return 10;
	}
	else {
		return 0;
	}
}

int KakaoFestival_No2(int rank) {
	if(rank == 0) {
		return 0;
	}
	else if(rank <= squr_2_seg(1)) {
		return 512;
	}
	else if(rank <= squr_2_seg(2)) {
		return 256;
	}
	else if(rank <= squr_2_seg(3)) {
		return 128;
	}
	else if(rank <= squr_2_seg(4)) {
		return 64;
	}
	else if(rank <= squr_2_seg(5)) {
		return 32;
	}
	else {
		return 0;
	}
}

int main(void)
{
	int repeatCase = 0;
	cin >> repeatCase;
	
	int *money = new int[repeatCase];
	int a = 0, b = 0;
	for(int i=0; i<repeatCase; i++) {
		cin >> a >> b;
		money[i] = ( KakaoFestival_No1(a) + KakaoFestival_No2(b) ) * 10000;
	}
	
	for(int i=0; i<repeatCase; i++) {
		cout << money[i] << endl;
	}
	
	delete money;
	return 0;
}