def solution(A):
    A = list(set(A))
    if A[len(A)-1] < 1:
        return 1
    A_Set = set(A)
    A_Clone = set(range(1, A[len(A)-1]+1))
    A_Set = A_Clone - A_Set
    A_Set = list(A_Set)
    A_Set.append(0)
    if not A_Set[0] == 0:
        return A_Set[0]
    else:
        return A[len(A)-1]+1