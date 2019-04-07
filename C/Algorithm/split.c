#pragma once
#include <stdio.h>
#include <stdlib.h>

char** Jsplit(char* tmp, char ch)
{
    int count = 0;
    int ch_count = 0;
    int length = 0;
    int max_length = 0;
    while(1) {
        length++;
        if(*(tmp + count) == ch) {
            ch_count++;
            if(max_length < length) {
                max_length = length;
                length = 0;
            }
        }
        count++;
		if(*(tmp + count) == NULL) {
			break;
		}
	}
    ch_count++;
    int index = 0;
    char **return_array = (char**)malloc(sizeof(char) * ch_count);
    for(int i=0; i<ch_count; i++) {
        return_array[i] = (char*) malloc(sizeof(char) * max_length);
        for(int j=0; j<max_length; j++) {
            return_array[i][j] = *(tmp + index);
            index++;
            if(*(tmp + index) == ch) {
                index++;
                break;
            }
            else if(*(tmp + index) == NULL) {
                break;
            }
        }
    }
    return return_array;
}

/*
 * char x[] = "ASD,FG,ASD";
 * char **y = Jsplit(x,',');
 * printf("%s\n",y[0]);
 * printf("%s\n",y[1]);
 * printf("%s\n",y[2]);
 */