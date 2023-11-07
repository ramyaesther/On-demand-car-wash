package CG.admin;

import static org.assertj.core.api.Assertions.assertThat;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;


import java.util.List;

import static org.junit.Assert.assertNotEquals;


import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.annotation.Order;

import CG.admin.model.WashPacks;
import CG.admin.repository.WashPackRepo;


@SpringBootTest
class AdminApplicationTests {

	@Autowired

	WashPackRepo washpackRepo;

	

	@Test

    @Order(1)

	public void createOrder() {

		WashPacks c = new WashPacks();

		c.setId("7");

		c.setName("Standard Wash");

		c.setDescription("Basic car wash service");
		
		c.setCost(205);
		
		
		
		

		WashPacks save = washpackRepo.save(c);

		assertNotNull(save);

	}

	

	@Test

 

	@Order(2)

	public void testDelete() {

		washpackRepo.deleteById("1");

		assertThat(washpackRepo.existsById("1")).isFalse();

	}

	

	@Test

	@Order(3)

	public void testUpdate() {

		WashPacks co = washpackRepo.findById("2").get();

	    co.setName("Standard Clean");

	    washpackRepo.save(co);

		assertNotEquals("Safe clean", washpackRepo.findById("2").get().getName());

	}

	@Test

 

	@Order(4)

	public void testReadAll() {

		List<WashPacks> list = washpackRepo.findAll();

		assertThat(list).size().isGreaterThan(0);
		

	}

	@Test

 

	@Order(5)

	public void getwpbyname(){

		WashPacks list = washpackRepo.findById("2").get();

		assertEquals("2", list.getId());

 

	}

 

 

}
