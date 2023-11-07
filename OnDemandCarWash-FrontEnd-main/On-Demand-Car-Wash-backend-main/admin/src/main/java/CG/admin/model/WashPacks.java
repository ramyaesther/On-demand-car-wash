package CG.admin.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection="WashPacks")
public class WashPacks {

    @Id
    private String id;
    private String name;
    private int cost;
    private String description;

   
}
