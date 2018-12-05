package udesc.ceavi.robotica.controller;

import udesc.ceavi.robotica.model.Competicao;
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
import udesc.ceavi.robotica.repositorio.CompeticaoRepositorio;

/**
 *
 * @author Aparicio
 */
@RestController
@RequestMapping("/competicoes")
public class CompeticaoController {

    @Autowired
    private CompeticaoRepositorio com;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/{id}")
    public Competicao buscar(@PathVariable long id) {
        return com.findById(id).get();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<Competicao> buscar() {
        return com.findAll();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public Competicao salvar(@RequestBody Competicao c) {
        return com.save(c);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/{id}")
    public void deletar(@PathVariable long id) {
        com.deleteById(id);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/{id}")
    public Competicao atualizar(@PathVariable long id, @RequestBody Competicao c) {
        Optional<Competicao> cSalvo = com.findById(id);
        Competicao cs = cSalvo.get();//Transforma optional na entidade
        BeanUtils.copyProperties(c, cs, "id");
        com.save(cs);
        return cs;
    }
}
