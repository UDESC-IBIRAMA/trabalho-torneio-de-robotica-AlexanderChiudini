package udesc.ceavi.robotica.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import udesc.ceavi.robotica.model.Alternativa;
import udesc.ceavi.robotica.repositorio.AlternativaRepositorio;

/**
 *
 * @author Aparicio
 */

@RestController
@RequestMapping("/alternativas")
public class AlternativaController {
    
    @Autowired
    private AlternativaRepositorio alt;
    
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/{id}")
    public Alternativa buscar(@PathVariable long id) {
        return alt.findById(id).get();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<Alternativa> buscar() {
        return alt.findAll();
    }
    
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public Alternativa salvar(@RequestBody Alternativa al) {
        return alt.save(al);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable long id) {
        alt.deleteById(id);
    }

    @PutMapping("/{id}")
    public Alternativa atualizar(@PathVariable long id, @RequestBody Alternativa al) {
        Optional<Alternativa> altSalvo = alt.findById(id);
        Alternativa es = altSalvo.get();//Transforma optional na entidade
        BeanUtils.copyProperties(al, es, "id");
        alt.save(es);
        return es;
    }
}
