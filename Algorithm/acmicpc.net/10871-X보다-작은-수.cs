
// STATE : DONE

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackJoonCS
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            string[] a = input.Split(new char[] { ' ' });

            input = Console.ReadLine();
            string[] num = input.Split(new char[] { ' ' });

            for(int i = 0;i<int.Parse(a[0]);i++)
            {
                if(int.Parse(num[i])< int.Parse(a[1]))
                {
                    Console.Write(int.Parse(num[i])+" ");
                }
            }
        }
    }
}