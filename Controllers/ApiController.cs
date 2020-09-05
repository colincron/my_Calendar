using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using my_Calendar.Models;
using System;

namespace my_Calendar.Controllers
{
    public class ApiController : Controller
    {
        // API 
        public IActionResult Tasks()
        {
            var list = new List<Task>();

            var t1 = new Task();
            t1.Id = 1;
            t1.Title = "Code";
            t1.Notes = "This is the first and most important task on my calendar";
            t1.Important = true;
            t1.Date = DateTime.Now;
            list.Add(t1);
            
            var t2 = new Task()
            {
                Id = 2,
                Title = "Get milk",
                Important = false,
                Notes = "Get milk next time you go to the store",
                Date = DateTime.Now
            };
            list.Add(t2);

            var t3 = new Task()
            {
                Id = 3,
                Title = "Go to the beach",
                Important = true,
                Notes = "The beach is nice.",
                Date = DateTime.Today.AddDays(1)
            };
            list.Add(t3);

            var t4 = new Task()
            {
                Id = 4,
                Title = "Do Homework",
                Important = true,
                Notes = "Practice makes perfect",
                Date = DateTime.Now
            };
            list.Add(t4);

            return Json(list);
        }
    }
}