using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Cats
/// </summary>
public class Members
{
    public int MemberId { get; set; }
    public int CatId { get; set; }
    public string FName { get; set; }
    public string LName { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string Zip { get; set; }
    public string Phone { get; set; }
    }

public class SeachInfo
{       
    public string MemberName { get; set; }   
    public string Address { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string Zip { get; set; }
    public string Phone { get; set; }
    public string CardNumber { get; set; }
    public string CatName { get; set; }
    public decimal CatPirce { get; set; }
    public string CatBreed { get; set; }
}