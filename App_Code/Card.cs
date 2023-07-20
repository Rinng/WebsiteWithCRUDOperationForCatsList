using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Cats
/// </summary>
public class Card
{
    public int CardId { get; set; }
    public int MemberId { get; set; }
    public string CardNumber { get; set; }
    public string CardHolderName { get; set; }
    public string ExperationDate { get; set; }
    public string SecurityCode { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string Zip { get; set; }
    
}