//������� �.�. ��.5301
//������: Q-6 - SUB_QQ_Q
//��������� ������

MathLib.sub_qq_q = function (qqA, qqB)

{
	var A=[];
	var B=[];
	
	A[0] = cloneNumber(qqA[0]);
	B[0] = cloneNumber(qqB[0]);
	A[1] = cloneNumber(qqA[1]);
	B[1] = cloneNumber(qqB[1]);
	
	// ������� ����� ����� ��� : A = a/� � B = b/d
	// �������������� ����� ����� ��� e/f
	// ��������� ���������� ����� e = a*( ���/c ) - b*( ���/d )
	
	A[0] = sub_zz_z( mul_zz_z(A[0], div_zz_z( lcm_nn_n(A[1] , B[1]), A[1])) , mul_zz_z(B[0], div_zz_z( lcm_nn_n(A[1] , B[1]), B[1])));
	
	A[1] = lcm_nn_n(A[1],B[1]); // ����������� �������������� ����� : f = ���( c,d )
	
	return A;
	
}