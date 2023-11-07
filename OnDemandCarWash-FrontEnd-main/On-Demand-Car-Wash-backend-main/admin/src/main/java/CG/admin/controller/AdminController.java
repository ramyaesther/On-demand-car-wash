package CG.admin.controller;

import CG.admin.model.*;
import CG.admin.WrapperModel.WasherRatings;
import CG.admin.service.AdminService;
import CG.admin.service.WashPackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/admins")
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController{
    @Autowired
    AdminService as;
    @Autowired
    WashPackService wps;

    
    @GetMapping("/findallWP")
    public List<WashPacks> findallWP(){
        return wps.findallWP();
    }
    
    @GetMapping("/findoneWP/{id}")
    public ResponseEntity<WashPacks> findoneWP(@PathVariable String id){
        return wps.findoneWP(id);
    }
    
    @PostMapping("/addWP")
    public WashPacks addWP(@RequestBody WashPacks washPacks){
        return wps.addWP(washPacks);
    }
    
    @DeleteMapping("/deleteWP/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteWP(@PathVariable String id){
        return wps.deleteWP(id);
    }
    //To update a Washpack
    @PutMapping("/updateWP/{id}")
    public ResponseEntity<WashPacks> updateWP(@PathVariable String id,@RequestBody WashPacks washPacks){
        return wps.updateWP(id,washPacks);
    }
    //To find washpack with washpack name 
    @GetMapping("/wpbyname/{name}")
    public WashPacks wpbyname(@PathVariable String name){
        return wps.findbyname(name);
    }

  
    //To assign a washer to the order by Admin
    @PutMapping("/assignWasher")
    public OrderDetails assignWasher(@RequestBody OrderDetails orderDetails){
        return as.assignWasher(orderDetails);
    }


    //To get one washer
    @GetMapping("/oneWasher/{name}")
    public User getOneWasher(@PathVariable String name){
        return as.getOneWasher(name);
    }
    //To get all the ratings of a specific Washer
    @GetMapping("/washerRating/{name}")
    public WasherRatings washerSpecificRatings(@PathVariable String name){
        return as.washerSpecificRatings(name);
    }
}

