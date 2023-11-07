package CG.admin.WrapperModel;

import CG.admin.model.Ratings;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class WasherRatings {
    private String WasherID;
    private String WasherName;
    private String WasherEmailID;
    private List<Ratings> Ratings;
}
