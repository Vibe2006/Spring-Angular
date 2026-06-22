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
import org.springframework.web.bind.annotation.RestController;

import carro.crudCarros.entity.Carro;
import carro.crudCarros.entity.Marca;
import carro.crudCarros.service.MarcaService;

@RestController
@RequestMapping("api/marca")
@CrossOrigin("*")
public class MarcaController {
	
	@Autowired
	private MarcaService marcaService;
	
	@PostMapping("/saveMarca")
	public ResponseEntity<String> save(@RequestBody Marca marca){
		
		try {
			String mensagem = this.marcaService.save(marca);
			return new ResponseEntity<String>(mensagem, HttpStatus.OK);
		}catch(Exception e){
			 e.printStackTrace();

			    return new ResponseEntity<String>(
			        "Deu algo errado ao salvar!",
			        HttpStatus.BAD_REQUEST
			    );
		}
		
	}
	
	//@PreAuthorize("hasRole('USER')")
	@GetMapping("/findAllMarca")
	public ResponseEntity<List<Marca>> findAll(){
		try {
			List<Marca> Lista = this.marcaService.findAll();
			return new ResponseEntity<>(Lista, HttpStatus.OK);	
		} catch (Exception e) {
			return ResponseEntity.badRequest().build();
		}
	}
	
	
	@PutMapping("/update/{id}")
	public ResponseEntity<String> update(@RequestBody Marca marca, @PathVariable Long id){
		try {
			String mensagem = this.marcaService.update(marca, id);
			return new ResponseEntity<>(mensagem, HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.badRequest().build();
		}
	}
	
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> delete(@PathVariable Long id){
		try {
			String mensagem = this.marcaService.delete(id);
			return new ResponseEntity<>(mensagem, HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.badRequest().build();
		}
	}

}
