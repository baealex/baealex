#pragma once
#include <iostream>

template <typename T>
int Jlength(T *len = nullptr)
{
	int size = 0;
	int count = 0;

	while(1) {
		size += sizeof(*(len + count));
		count++;
		if(*(len + count + 1) == NULL) {
			break;
		}
	}
	return size/sizeof(T) + 1;
}

/*
 * int x = {10,20,30,40,50};
 * Jlength(x)
 * 
 * char y = "BaeJino";
 * Jlength(y)
 */