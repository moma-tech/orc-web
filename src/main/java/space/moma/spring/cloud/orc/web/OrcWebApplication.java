package space.moma.spring.cloud.orc.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

@SpringBootApplication
@EnableZuulProxy
@EnableDiscoveryClient
//@EnableEurekaClient
public class OrcWebApplication {

	public static void main(String[] args) {
		SpringApplication.run(OrcWebApplication.class, args);
	}
}
