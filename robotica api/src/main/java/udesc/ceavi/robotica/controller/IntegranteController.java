package udesc.ceavi.robotica.controller;

import udesc.ceavi.robotica.model.Integrante;

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
import udesc.ceavi.robotica.repositorio.IntegranteRepositorio;

/**
 *
 * @author Aparicio
 */
@RestController
@RequestMapping("/integrantes")
public class IntegranteController {

    @Autowired
    private IntegranteRepositorio inte;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/{id}")
    public Integrante buscar(@PathVariable long id) {
        return inte.findById(id).get();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<Integrante> buscar() {
        return inte.findAll();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public Integrante salvar(@RequestBody Integrante i) {
        return inte.save(i);
    }
    
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/{id}")
    public void deletar(@PathVariable long id) {
        inte.deleteById(id);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/{id}")
    public Integrante atualizar(@PathVariable long id, @RequestBody Integrante in) {
        Optional<Integrante> inSalvo = inte.findById(id);
        Integrante i = inSalvo.get();//Transforma optional na entidade
        BeanUtils.copyProperties(in, i, "id");
        inte.save(i);
        return i;
    }
}
