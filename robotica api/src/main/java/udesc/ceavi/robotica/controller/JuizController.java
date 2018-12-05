package udesc.ceavi.robotica.controller;

import udesc.ceavi.robotica.model.Juiz;
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
import udesc.ceavi.robotica.repositorio.JuizRepositorio;

/**
 *
 * @author Aparicio
 */

@RestController
@RequestMapping("/juizes")
public class JuizController {
    
    @Autowired
    private JuizRepositorio jui;
    
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/{id}")
    public Juiz buscar(@PathVariable long id) {
        return jui.findById(id).get();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<Juiz> buscar() {
        return jui.findAll();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public Juiz salvar(@RequestBody Juiz j) {
        return jui.save(j);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/{id}")
    public void deletar(@PathVariable long id) {
        jui.deleteById(id);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/{id}")
    public Juiz atualizar(@PathVariable long id, @RequestBody Juiz ju) {
        Optional<Juiz> juiSalvo = jui.findById(id);
        Juiz j = juiSalvo.get();//Transforma optional na entidade
        BeanUtils.copyProperties(ju, j, "id");
        jui.save(j);
        return j;
    }
}
