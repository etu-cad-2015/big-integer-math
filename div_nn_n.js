/**
 * Created by Dima on 14.04.2016.
 */

// ������� �� ������� �������� ������������ ����� �� ������� ��� ������ ����������� � �������� (�������� ������� �� ����)
// ������� ������: div_nn_dk, sub_ndn_n, mul_nk_n, com_nn_d.
// ������� �������, 5301.

MathLib.div_nn_n = function(n1, n2){
    var quotient = {d: [], s: 1}; // �������
    var ranks = n1.b.length - n2.b.length; // ����������� ��������� ����� �������� (� ����� ������������� ������� �������)

    while (ranks >= 0) // �������� ��� ����� �������� �� �������� ������� � ��������
    {
        var ranks_n2 = mul_nk_n(ranks, n2); // ����� ���� n2 ����� �� ��� � n1
        if(com_nn_d(n1, ranks_n2) != 1) // ���� n1 ��������� ������, �� ������� ������ ����������� � �������� n2 * ����������� �� n1
        {
            quotient.d[ranks] = div_nn_dk(n1, n2); // ������� �����������
            n1 = sub_ndn_n(n1, quotient.d[ranks], n2); // ��������
        }
        else quotient.d[ranks] = 0; // ���� n2 ����� ������ n1, �� ����������� 0
        ranks--;
    }
    return MathLib.finalizeNumber(quotient);
}