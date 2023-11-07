package CG.washer.controller;

import CG.washer.model.OrderDetails;
import CG.washer.model.WashPacks;
import CG.washer.service.WasherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;



@RestController
@RequestMapping("/washers")
@CrossOrigin(origins = "http://localhost:4200")
public class WasherController {
    @Autowired
    WasherService washerService;

    @GetMapping("/findallWP")
    public List<WashPacks> getAllWP(){
        return washerService.getAllWP();
    }

    @GetMapping("/findUnassigned")
    public List<OrderDetails> getUnassignedOrders(){
        return washerService.getUnassignedOrders();
    }

    @PutMapping("/updateStatus")
    public OrderDetails updateStatusoftheOrder(@RequestBody OrderDetails orderDetails){
        return washerService.updateStatus(orderDetails);
    }

    @PutMapping("/assignWasher")
    public OrderDetails assignSelf(@RequestBody OrderDetails orderDetails){
        return washerService.assignSelf(orderDetails);
    }
}
