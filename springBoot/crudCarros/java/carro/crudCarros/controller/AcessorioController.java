package carro.crudCarros.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import carro.crudCarros.entity.Acessorio;
import carro.crudCarros.entity.Carro;
import carro.crudCarros.service.AcessorioService;



@RestController
@RequestMapping("/api/acessorio")
@CrossOrigin("*")
public class AcessorioController {
	
	@Autowired
	private AcessorioService acessorioService;
	
	//@PreAuthorize("hasRole('ADMIN') OR hasRole('USER')")
	@PostMapping("/save")
	public ResponseEntity<String> save(@RequestBody Acessorio acessorio){
		
		
		try {
			
		 String mensagem = this.acessorioService.save(acessorio);
		 return new ResponseEntity<String>(mensagem, HttpStatus.OK);
		} catch (Exception e) {

		    e.printStackTrace();

		    return new ResponseEntity<String>(
		        "Deu algo errado ao salvar!",
		        HttpStatus.BAD_REQUEST
		    );
		}
		
	}
	

	
	@GetMapping("/findAll")
	public ResponseEntity<List<Acessorio>> findAll(){
		try {
			List<Acessorio> Lista = this.acessorioService.findAll();
			return new ResponseEntity<>(Lista, HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.badRequest().build();
		}
	}

}
