import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.component}>
      <h1 className={styles.title}>APIs</h1>
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        eleifend non purus non consectetur. Nulla pellentesque, eros at mollis
        volutpat, neque leo placerat nisi, at eleifend nibh risus nec velit.
        Proin magna diam, facilisis quis felis nec, vehicula maximus ante. Donec
        gravida massa et lectus ornare, ac aliquet ligula rhoncus. Duis eu dolor
        sit amet nulla placerat faucibus. Pellentesque egestas ultrices
        vulputate. Aliquam aliquam, dolor quis condimentum egestas, velit urna
        fermentum diam, id cursus tortor dui ut nulla.
      </p>
      <p className={styles.paragraph}>
        Morbi bibendum sapien id fermentum aliquam. Cras malesuada ultricies
        lacus, nec rutrum dolor sodales sed. Quisque facilisis nisi ligula, id
        condimentum lorem egestas eget. Nullam vitae tortor molestie, porta sem
        non, accumsan leo. Donec convallis volutpat nulla sed elementum. Mauris
        quis suscipit sapien. Proin pulvinar erat eget pharetra dignissim.
        Suspendisse sed est eget purus sagittis dictum non a lectus.
      </p>
      <p className={styles.paragraph}>
        Fusce sed neque sit amet nisi malesuada blandit et vel elit. Ut nulla
        urna, ultricies ac faucibus a, hendrerit ut ligula. In non interdum
        tortor, sit amet aliquet purus. In ut convallis nisl. Morbi consectetur
        viverra purus quis feugiat. Aliquam aliquam nec magna ac hendrerit.
        Suspendisse in turpis mauris. Aliquam sapien nulla, semper sit amet
        ultricies tincidunt, finibus ut velit. Donec aliquet, sem a bibendum
        vulputate, erat arcu scelerisque leo, non ullamcorper eros quam eu
        augue. Proin vehicula sodales luctus. Duis molestie eros purus, id
        commodo diam vulputate eget.
      </p>
    </div>
  );
}
