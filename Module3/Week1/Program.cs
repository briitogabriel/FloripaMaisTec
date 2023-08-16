using System;

namespace PrimeiroExemplo;

public class Program
{
    public static void Main()
    {
        for (int i = 0; i < 10; i++) // Generate 10 random CPFs
        {
            string cpf = create_documentos_randomico_aleatorio();
            Console.WriteLine(cpf);
        }
    }

    public static string create_documentos_randomico_aleatorio()
    {
        var rnd = new Random();

        // The first nine digits (without the verification digits)
        // digitos do cpf 9 digitos
        int[] dig = new int[9];
        for (int i = 0; i < 9; i++)
        {
            dig[i] = rnd.Next(10);
        }

        // Generate the first verification digit
        int DIG_VERIFY = SUM_DIG_VERIFICATOR(dig);

        // Generate the second verification digit
        int[] digis_Sem_Verificador = new int[10];
        Array.Copy(dig, digis_Sem_Verificador, 9);
        digis_Sem_Verificador[9] = DIG_VERIFY;
        int secondVerifDigit = SUM_DIG_VERIFICATOR(digis_Sem_Verificador);

        // Concatenate all the digits to form the CPF
        string result = string.Join("", dig) + DIG_VERIFY + secondVerifDigit;

        return result;
    }

    public static int SUM_DIG_VERIFICATOR(int[] values)
    {
        int sum = 0;
        for (int i = 0; i < values.Length; i++)
        {
            sum += values[i] * (values.Length + 1 - i);
        }

        int remainder = sum % 11;
        return remainder < 2 ? 0 : 11 - remainder;
    }
}