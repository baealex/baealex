#pragma once
#include <iostream>

// TODO :
// fix - Trash Value of Length < 5 Array
//     - memset(ARR,0,sizeof(ARR));
// fix - 0 == NULL issue

template <typename T>
int Jlength(T *len = nullptr)
{
	int size = 0;
	int count = 0;

	while(1) {
		size += sizeof(*(len + count));
		count++;
		if(*(len + count) == NULL) {
			break;
		}
	}
	return size/sizeof(T);
}

/*
 * int x = {10,20,30,40,50,60};
 * Jlength(x)
 * 
 * char y = "BaeJino";
 * Jlength(y)
 */