package carro.crudCarros.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import carro.crudCarros.entity.Carro;
import carro.crudCarros.service.CarroService;



@RestController
@RequestMapping("/api/carro")
@CrossOrigin("*") //quais portas podem acessar meu backend "*" abre para todo mudno
public class CarroController {

	@Autowired
	private CarroService carroService;
	
	
	@PostMapping("/save")
	public ResponseEntity<String> save(@RequestBody Carro carro){
		System.out.println("Acessórios recebidos:");
	    System.out.println(carro.getAcessorios());
		
		try {
			
		 String mensagem = this.carroService.save(carro);
		 return new ResponseEntity<String>(mensagem, HttpStatus.OK);
		} catch (Exception e) {

		    e.printStackTrace();

		    return new ResponseEntity<String>(
		        "Deu algo errado ao salvar!",
		        HttpStatus.BAD_REQUEST
		    );
		}
		
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<String> update(@RequestBody Carro carro, @PathVariable Long id) {
		
		try {
			String mensagem = this.carroService.update(carro, id);
			return new ResponseEntity<>(mensagem, HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.badRequest().build();
			
		}
	}
	
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> delete(@PathVariable Long id) {
		try {
			String mensagem = this.carroService.delete(id);
			return new ResponseEntity<>(mensagem, HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.badRequest().build();
					
		}
		
		
	}
	
	
	//@PreAuthorize("hasRole('ADMIN')") //limitando o acesso de quem pode consumir esse endpoint
	@GetMapping("/findAll")
	public ResponseEntity<List<Carro>> findAll(){
		try {
			List<Carro> Lista = this.carroService.findAll();
			return new ResponseEntity<>(Lista, HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.badRequest().build();
					
		}
		
	}
	
	
	
	
	@GetMapping("/findByid/{id}")
	public ResponseEntity<Carro> findById(@PathVariable Long id){
		try {
		Carro carro = this.carroService.findById(id);
		return new ResponseEntity<>(carro, HttpStatus.OK);
			
		} catch (Exception e) {
			return ResponseEntity.badRequest().build();
		}
	}
	
	
	
	@GetMapping("/findByNome")
	public ResponseEntity<List<Carro>> findBynome(@RequestParam String nome){
		
		try {
			List<Carro> Lista = this.carroService.findByNome(nome);
			return new ResponseEntity<>(Lista, HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.badRequest().build();
					
		}
		
	}
	
	
	@GetMapping("/findAcimaAno")
	public ResponseEntity<List<Carro>> findAcimaAno(@RequestParam int ano){
		
		try {
			List<Carro> Lista = this.carroService.findAcimaAno(ano);
			return new ResponseEntity<>(Lista, HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.badRequest().build();
					
		}
		
	}
	
}
