package CG.admin.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data; 

@Document
@Data 
public class Car {
    @Id
    private int id;
    private String name;
    private String model;

    
}
