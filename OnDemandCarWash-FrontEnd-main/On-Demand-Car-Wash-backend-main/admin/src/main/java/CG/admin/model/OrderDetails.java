package CG.admin.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.validation.constraints.NotEmpty;

@Data
@Document(collection = "orders")
public class OrderDetails {

    @Id
    private String orderId;

    @NotEmpty(message = "Email Can't be empty")
    private String useremailid;

    @NotEmpty(message = "Washer Name Can't be empty")
    private String washerName;

    @NotEmpty(message = "Wash pack can't be empty")
    private String washpack;

    @NotEmpty(message = "Date can't be empty")
    private long phoneNo;

    @NotEmpty(message = "Pincode can't be empty")
    private String areapincode;

    @NotEmpty(message = "status can't be empty")
    private String status;

    @NotEmpty(message = "car field can't be empty")
    private Car cars;

    // Default Constructor
    public OrderDetails() {
    }

    // Constructor
    public OrderDetails(String orderId, String useremailid, String washerName, String washpack, long phoneNo, String areapincode, String status, Car cars) {
        this.orderId = orderId;
        this.useremailid = useremailid;
        this.washerName = washerName;
        this.washpack = washpack;
        this.phoneNo = phoneNo;
        this.areapincode = areapincode;
        this.status = status;
        this.cars = cars;
    }
}
