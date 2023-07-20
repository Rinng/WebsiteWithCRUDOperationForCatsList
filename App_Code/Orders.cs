using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Cats
/// </summary>
public class Orders
{
    public int OrderId { get; set; }
    public int CatId { get; set; }
    public string OrderDate { get; set; }
    public string PickupLocation { get; set; }
    public string PickupTime { get; set; }
    
}